import { NgStyle } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ColumnDirective } from '../tabulator/column.directive';
import { TabulatorModule } from '../tabulator/tabulator.module';
import { networkData, NetworkRequest } from './data';

// Format helpers
function formatBytes(b: number): string {
    if (!b) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    let i = 0;
    let size = b;
    while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
    }
    return `${size.toFixed(1)} ${units[i]}`;
}

function formatDuration(ms: number): string {
    if (!ms) return '0ms';
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        TabulatorModule,
        NgStyle
    ]
})
export class AppComponent implements OnInit {
    isRendered = true;
    showColumnMenu = false;

    @ViewChildren(ColumnDirective) columnList!: QueryList<ColumnDirective>;

    // Raw data
    allRequests: NetworkRequest[] = [];

    // Filtered data (computed property)
    get filteredData(): NetworkRequest[] {
        return this.computeFilteredData();
    }

    // Filter states
    filterText = '';
    directionFilter: 'all' | 'inbound' | 'outbound' = 'all';
    excludePlugins = false;
    excludeStatic = false;
    excludeProxied = false;

    // Column visibility
    columnVisibility = {
        'Status': true,
        'Method': true,
        'Name': true,
        'Domain': true,
        'Path': true,
        'Type': true,
        'Size': true,
        'Duration': true,
        'Waterfall': true
    };

    // Constants for filtering
    private readonly PLUGIN_PATHS = ['/dashboard', '/scalar', '/openapi', '/asyncapi', '/_app', '/@vite', '/__vite'];
    private readonly STATIC_EXTENSIONS = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.map', '.webp', '.avif'];

    get columnEntries() {
        return Object.entries(this.columnVisibility);
    }

    // Statistics (computed)
    get stats() {
        const filtered = this.filteredData;
        const total = this.allRequests;

        let transferred = 0;
        let resources = 0;
        let totalDuration = 0;
        let durationCount = 0;
        let failedCount = 0;
        let pendingCount = 0;
        let typeCounts = { fetch: 0, xhr: 0, ws: 0, other: 0 };

        filtered.forEach(r => {
            const type = (r.type || 'other').toLowerCase();
            if (type === 'fetch') typeCounts.fetch++;
            else if (type === 'xhr') typeCounts.xhr++;
            else if (type === 'ws') typeCounts.ws++;
            else typeCounts.other++;

            transferred += Number(r.transferred || r.size || 0);
            resources += Number(r.size || 0);

            if (!r.status) {
                pendingCount++;
            } else if (r.status >= 400) {
                failedCount++;
            }

            if (r.duration !== undefined && r.duration !== null) {
                totalDuration += r.duration;
                durationCount++;
            }
        });

        const completedCount = filtered.length - pendingCount;
        const successRate = completedCount > 0
            ? ((completedCount - failedCount) / completedCount * 100).toFixed(1)
            : '0.0';

        return {
            filteredCount: filtered.length,
            totalCount: total.length,
            transferred: formatBytes(transferred),
            resources: formatBytes(resources),
            avgLatency: durationCount > 0 ? formatDuration(totalDuration / durationCount) : '0ms',
            failedCount,
            pendingCount,
            successRate,
            typeCounts
        };
    }

    ngOnInit() {
        // Load the network data
        this.allRequests = networkData;
    }

    // Compute filtered data based on current filter states
    private computeFilteredData(): NetworkRequest[] {
        const query = this.filterText.toLowerCase();

        // Early return if no filters active
        if (!query && this.directionFilter === 'all' && !this.excludePlugins && !this.excludeStatic && !this.excludeProxied) {
            return this.allRequests;
        }

        return this.allRequests.filter(r => {
            // Filter by direction first (cheapest check)
            if (this.directionFilter !== 'all' && r.direction !== this.directionFilter) {
                return false;
            }

            // Filter out proxied/outbound requests if enabled
            if (this.excludeProxied && r.direction === 'outbound') {
                return false;
            }

            // Filter out plugin requests if enabled
            if (this.excludePlugins) {
                const path = r.path || '';
                const url = r.url;
                for (let i = 0; i < this.PLUGIN_PATHS.length; i++) {
                    if (path.startsWith(this.PLUGIN_PATHS[i]) || url.includes(this.PLUGIN_PATHS[i])) {
                        return false;
                    }
                }
            }

            // Filter out static assets if enabled
            if (this.excludeStatic) {
                const urlLower = r.url.toLowerCase();
                const pathLower = r.path?.toLowerCase() || '';
                for (let i = 0; i < this.STATIC_EXTENSIONS.length; i++) {
                    if (urlLower.endsWith(this.STATIC_EXTENSIONS[i]) || pathLower.endsWith(this.STATIC_EXTENSIONS[i])) {
                        return false;
                    }
                }
            }

            // Filter by search query last (most expensive)
            if (query) {
                const urlLower = r.url.toLowerCase();
                const methodLower = r.method.toLowerCase();
                const statusStr = r.status ? String(r.status) : '';

                if (!urlLower.includes(query) && !methodLower.includes(query) && !statusStr.includes(query)) {
                    return false;
                }
            }

            return true;
        });
    }

    // Filter change handlers
    onFilterTextChange(value: string) {
        this.filterText = value;
    }

    setDirectionFilter(direction: 'all' | 'inbound' | 'outbound') {
        this.directionFilter = direction;
    }

    togglePluginFilter() {
        this.excludePlugins = !this.excludePlugins;
    }

    toggleStaticFilter() {
        this.excludeStatic = !this.excludeStatic;
    }

    toggleProxiedFilter() {
        this.excludeProxied = !this.excludeProxied;
    }

    // Column menu handlers
    toggleColumnMenu() {
        this.showColumnMenu = !this.showColumnMenu;
    }

    toggleColumn(columnTitle: string) {
        this.columnVisibility[columnTitle] = !this.columnVisibility[columnTitle];
        const column = this.columnList.find(c => c.title === columnTitle);
        if (column) {
            column.visible = this.columnVisibility[columnTitle];
        }
    }

    // Format helpers for templates
    formatBytes(b: number): string {
        return formatBytes(b);
    }

    formatDuration(ms: number): string {
        return formatDuration(ms);
    }

    getName(url: string): string {
        try {
            const u = new URL(url, 'http://localhost');
            const parts = u.pathname.split('/');
            return parts[parts.length - 1] || u.hostname || url;
        } catch { return url; }
    }

    // Waterfall helpers
    getWaterfallStyle(req: NetworkRequest): any {
        // Calculate based on time range
        const allReqs = this.filteredData;
        let min = Infinity;
        let max = 0;

        allReqs.forEach(r => {
            if (r.timestamp < min) min = r.timestamp;
            const end = r.timestamp + (r.duration || 0);
            if (end > max) max = end;
        });

        if (min === Infinity) min = 0;
        if (max === 0) max = 1;

        const range = Math.max(1, max - min);
        const startPct = ((req.timestamp - min) / range) * 100;
        const widthPct = Math.max(0.5, (req.duration / range) * 100);
        const color = req.duration > 1000 ? '#ef4444' : req.duration > 500 ? '#f59e0b' : '#3b82f6';

        return {
            'left': `min(${startPct}%, calc(100% - 2px))`,
            'width': `${widthPct}%`,
            'background-color': color
        };
    }

    debug(...args: any[]) {
        console.log(...args);
    }
}
