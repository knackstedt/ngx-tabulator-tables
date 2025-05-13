import { ApplicationRef, Component, ContentChildren, createComponent, EventEmitter, Injector, Input, NgZone, Output, QueryList, SimpleChanges, TemplateRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CellComponent, ColumnDefinition, Options, RowComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import { ColumnDirective } from './column.directive';
import { NgTemplateOutlet } from '@angular/common';

export type TabulatorEvent<T = any> = {
    event: any,
    row?: RowComponent,
    cell?: CellComponent,
    data: T;
};

const getProps: <T extends {}>(obj: T) => T = (obj: any = {}) => {
    const props = {};
    Object.entries(obj).forEach(([k, v]) => {
        // Omit things prefixed with an underscore
        if (k.startsWith('_')) return;
        // Omit output event emitters
        if (k.startsWith('on')) return;
        if (['tabulator','cellTemplate','headerTemplate'].includes(k)) return;

        props[k] = v;
    });
    return props as any;
};

@Component({
    template: `<ng-container
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{'$implicit': data}"
    />`,
    standalone: true,
    imports: [NgTemplateOutlet]
})
class TemplateWrapper {
    @Input() template: TemplateRef<any>;
    @Input() data: Object;
}

@Component({
    selector: 'ngx-tabulator',
    template: '',
    styleUrls: [ ],
    encapsulation: ViewEncapsulation.None
})
export class TabulatorComponent implements Omit<Tabulator, 'columnManager' | 'rowManager' | 'footerManager' | 'browser' | 'browserSlow' | 'modules' | 'element'>, Omit<Options, 'columns'> {

    @ContentChildren(ColumnDirective) columns: QueryList<ColumnDirective>;

    private _dataSource = [];
    @Input() set dataSource(data: Object[]) {
        this._dataSource = data;

        // TODO: this is performance hell for reasons I do not understand.
        if (this.table?.getDataCount() > 0) {
            this.table.replaceData(data);
        }
        else {
            this.table?.setData(this.dataSource);
        }
    };
    get dataSource() { return this._dataSource; };

    @Input() options: Options = {};

    table: Tabulator;

    @Input() height: Options['height'];
    @Input() maxHeight: Options['maxHeight'];
    @Input() minHeight: Options['minHeight'];
    @Input() renderVertical: Options['renderVertical'];
    @Input() renderHorizontal: Options['renderHorizontal'];
    @Input() rowHeight: Options['rowHeight'];
    @Input() renderVerticalBuffer: Options['renderVerticalBuffer'];
    @Input() placeholder: Options['placeholder'];
    @Input() placeholderHeaderFilter: Options['placeholderHeaderFilter'];
    @Input() footerElement: Options['footerElement'];
    @Input() keybindings: Options['keybindings'];
    @Input() reactiveData: Options['reactiveData'];
    @Input() autoResize: Options['autoResize'];
    @Input() invalidOptionWarnings: Options['invalidOptionWarnings'];
    @Input() validationMode: Options['validationMode'];
    @Input() textDirection: Options['textDirection'];
    @Input() rowHeader: Options['rowHeader'];
    @Input() editorEmptyValue: Options['editorEmptyValue'];
    @Input() editorEmptyValueFunc: Options['editorEmptyValueFunc'];
    @Input() rowContextMenu: Options['rowContextMenu'];
    @Input() rowClickMenu: Options['rowClickMenu'];
    @Input() rowDblClickMenu: Options['rowDblClickMenu'];
    @Input() groupClickMenu: Options['groupClickMenu'];
    @Input() groupDblClickMenu: Options['groupDblClickMenu'];
    @Input() groupContextMenu: Options['groupContextMenu'];
    @Input() popupContainer: Options['popupContainer'];
    @Input() groupClickPopup: Options['groupClickPopup'];
    @Input() groupContextPopup: Options['groupContextPopup'];
    @Input() groupDblPopup: Options['groupDblPopup'];
    @Input() groupDblClickPopup: Options['groupDblClickPopup'];
    @Input() rowClickPopup: Options['rowClickPopup'];
    @Input() rowContextPopup: Options['rowContextPopup'];
    @Input() rowDblClickPopup: Options['rowDblClickPopup'];
    @Input() history: Options['history'];
    @Input() locale: Options['locale'];
    @Input() langs: Options['langs'];
    @Input() downloadEncoder: Options['downloadEncoder'];
    @Input() downloadConfig: Options['downloadConfig'];
    @Input() downloadRowRange: Options['downloadRowRange'];
    @Input() downloadDataFormatter: Options['downloadDataFormatter'];
    @Input() downloadReady: Options['downloadReady'];
    @Input() autoColumns: Options['autoColumns'];
    @Input() autoColumnsDefinitions: Options['autoColumnsDefinitions'];
    @Input() layout: Options['layout'];
    @Input() layoutColumnsOnNewData: Options['layoutColumnsOnNewData'];
    @Input() responsiveLayout: Options['responsiveLayout'];
    @Input() responsiveLayoutCollapseStartOpen: Options['responsiveLayoutCollapseStartOpen'];
    @Input() responsiveLayoutCollapseUseFormatters: Options['responsiveLayoutCollapseUseFormatters'];
    @Input() responsiveLayoutCollapseFormatter: Options['responsiveLayoutCollapseFormatter'];
    @Input() movableColumns: Options['movableColumns'];
    @Input() columnHeaderVertAlign: Options['columnHeaderVertAlign'];
    @Input() scrollToColumnPosition: Options['scrollToColumnPosition'];
    @Input() scrollToColumnIfVisible: Options['scrollToColumnIfVisible'];
    @Input() columnCalcs: Options['columnCalcs'];
    @Input() nestedFieldSeparator: Options['nestedFieldSeparator'];
    @Input() columnHeaderSortMulti: Options['columnHeaderSortMulti'];
    @Input() headerVisible: Options['headerVisible'];
    @Input() headerSort: Options['headerSort'];
    @Input() headerSortElement: Options['headerSortElement'];
    @Input() columnDefaults: Options['columnDefaults'];
    @Input() resizableColumnFit: Options['resizableColumnFit'];
    @Input() rowFormatter: Options['rowFormatter'];
    @Input() rowFormatterPrint: Options['rowFormatterPrint'];
    @Input() rowFormatterHtmlOutput: Options['rowFormatterHtmlOutput'];
    @Input() rowFormatterClipboard: Options['rowFormatterClipboard'];
    @Input() addRowPos: Options['addRowPos'];
    @Input() selectable: Options['selectable'];
    @Input() selectableRows: Options['selectableRows'];
    @Input() selectableRange: Options['selectableRange'];
    @Input() selectableRangeColumns: Options['selectableRangeColumns'];
    @Input() selectableRangeRows: Options['selectableRangeRows'];
    @Input() selectableRangeClearCells: Options['selectableRangeClearCells'];
    @Input() selectableRangeClearCellsValue: Options['selectableRangeClearCellsValue'];
    @Input() selectableRangeMode: Options['selectableRangeMode'];
    @Input() selectableRowsRangeMode: Options['selectableRowsRangeMode'];
    @Input() selectableRollingSelection: Options['selectableRollingSelection'];
    @Input() selectableRowsRollingSelection: Options['selectableRowsRollingSelection'];
    @Input() selectablePersistence: Options['selectablePersistence'];
    @Input() selectableRowsPersistence: Options['selectableRowsPersistence'];
    @Input() selectableCheck: Options['selectableCheck'];
    @Input() movableRows: Options['movableRows'];
    @Input() movableRowsConnectedTables: Options['movableRowsConnectedTables'];
    @Input() movableRowsSender: Options['movableRowsSender'];
    @Input() movableRowsReceiver: Options['movableRowsReceiver'];
    @Input() movableRowsConnectedElements: Options['movableRowsConnectedElements'];
    @Input() resizableRows: Options['resizableRows'];
    @Input() resizableRowGuide: Options['resizableRowGuide'];
    @Input() resizableColumnGuide: Options['resizableColumnGuide'];
    @Input() scrollToRowPosition: Options['scrollToRowPosition'];
    @Input() scrollToRowIfVisible: Options['scrollToRowIfVisible'];
    @Input() tabEndNewRow: Options['tabEndNewRow'];
    @Input() frozenRowsField: Options['frozenRowsField'];
    @Input() frozenRows: Options['frozenRows'];
    @Input() editTriggerEvent: Options['editTriggerEvent'];
    @Input() index: Options['index'];
    @Input() data: Options['data'];
    @Input() importFormat: Options['importFormat'];
    @Input() importReader: Options['importReader'];
    @Input() autoTables: Options['autoTables'];
    @Input() ajaxURL: Options['ajaxURL'];
    @Input() ajaxParams: Options['ajaxParams'];
    @Input() ajaxConfig: Options['ajaxConfig'];
    @Input() ajaxContentType: Options['ajaxContentType'];
    @Input() ajaxURLGenerator: Options['ajaxURLGenerator'];
    @Input() ajaxRequestFunc: Options['ajaxRequestFunc'];
    @Input() ajaxFiltering: Options['ajaxFiltering'];
    @Input() ajaxSorting: Options['ajaxSorting'];
    @Input() progressiveLoad: Options['progressiveLoad'];
    @Input() progressiveLoadDelay: Options['progressiveLoadDelay'];
    @Input() progressiveLoadScrollMargin: Options['progressiveLoadScrollMargin'];
    @Input() ajaxLoader: Options['ajaxLoader'];
    @Input() ajaxLoaderLoading: Options['ajaxLoaderLoading'];
    @Input() ajaxLoaderError: Options['ajaxLoaderError'];
    @Input() ajaxRequesting: Options['ajaxRequesting'];
    @Input() ajaxResponse: Options['ajaxResponse'];
    @Input() dataLoader: Options['dataLoader'];
    @Input() dataLoaderLoading: Options['dataLoaderLoading'];
    @Input() dataLoaderError: Options['dataLoaderError'];
    @Input() dataLoaderErrorTimeout: Options['dataLoaderErrorTimeout'];
    @Input() sortMode: Options['sortMode'];
    @Input() filterMode: Options['filterMode'];
    @Input() initialSort: Options['initialSort'];
    @Input() sortOrderReverse: Options['sortOrderReverse'];
    @Input() headerSortClickElement: Options['headerSortClickElement'];
    @Input() initialFilter: Options['initialFilter'];
    @Input() initialHeaderFilter: Options['initialHeaderFilter'];
    @Input() headerFilterLiveFilterDelay: Options['headerFilterLiveFilterDelay'];
    @Input() groupBy: Options['groupBy'];
    @Input() groupValues: Options['groupValues'];
    @Input() groupHeader: Options['groupHeader'];
    @Input() groupHeaderPrint: Options['groupHeaderPrint'];
    @Input() groupStartOpen: Options['groupStartOpen'];
    @Input() groupToggleElement: Options['groupToggleElement'];
    @Input() groupClosedShowCalcs: Options['groupClosedShowCalcs'];
    @Input() groupUpdateOnCellEdit: Options['groupUpdateOnCellEdit'];
    @Input() pagination: Options['pagination'];
    @Input() paginationMode: Options['paginationMode'];
    @Input() paginationSize: Options['paginationSize'];
    @Input() paginationSizeSelector: Options['paginationSizeSelector'];
    @Input() paginationElement: Options['paginationElement'];
    @Input() dataReceiveParams: Options['dataReceiveParams'];
    @Input() dataSendParams: Options['dataSendParams'];
    @Input() paginationAddRow: Options['paginationAddRow'];
    @Input() paginationCounter: Options['paginationCounter'];
    @Input() paginationCounterElement: Options['paginationCounterElement'];
    @Input() paginationButtonCount: Options['paginationButtonCount'];
    @Input() paginationInitialPage: Options['paginationInitialPage'];
    @Input() persistenceID: Options['persistenceID'];
    @Input() persistenceMode: Options['persistenceMode'];
    @Input() persistentLayout: Options['persistentLayout'];
    @Input() persistentSort: Options['persistentSort'];
    @Input() persistentFilter: Options['persistentFilter'];
    @Input() persistence: Options['persistence'];
    @Input() persistenceWriterFunc: Options['persistenceWriterFunc'];
    @Input() persistenceReaderFunc: Options['persistenceReaderFunc'];
    @Input() clipboard: Options['clipboard'];
    @Input() clipboardCopyRowRange: Options['clipboardCopyRowRange'];
    @Input() clipboardCopyFormatter: Options['clipboardCopyFormatter'];
    @Input() clipboardCopyHeader: Options['clipboardCopyHeader'];
    @Input() clipboardPasteParser: Options['clipboardPasteParser'];
    @Input() clipboardPasteAction: Options['clipboardPasteAction'];
    @Input() clipboardCopyStyled: Options['clipboardCopyStyled'];
    @Input() clipboardCopyConfig: Options['clipboardCopyConfig'];
    @Input() groupHeaderClipboard: Options['groupHeaderClipboard'];
    @Input() groupHeaderHtmlOutput: Options['groupHeaderHtmlOutput'];
    @Input() dataTree: Options['dataTree'];
    @Input() dataTreeElementColumn: Options['dataTreeElementColumn'];
    @Input() dataTreeBranchElement: Options['dataTreeBranchElement'];
    @Input() dataTreeChildIndent: Options['dataTreeChildIndent'];
    @Input() dataTreeChildField: Options['dataTreeChildField'];
    @Input() dataTreeCollapseElement: Options['dataTreeCollapseElement'];
    @Input() dataTreeExpandElement: Options['dataTreeExpandElement'];
    @Input() dataTreeStartExpanded: Options['dataTreeStartExpanded'];
    @Input() dataTreeSelectPropagate: Options['dataTreeSelectPropagate'];
    @Input() dataTreeFilter: Options['dataTreeFilter'];
    @Input() dataTreeSort: Options['dataTreeSort'];
    @Input() dataTreeChildColumnCalcs: Options['dataTreeChildColumnCalcs'];
    @Input() invalidOptionWarning: Options['invalidOptionWarning'];
    @Input() debugInvalidOptions: Options['debugInvalidOptions'];
    @Input() debugInitialization: Options['debugInitialization'];
    @Input() debugEventsExternal: Options['debugEventsExternal'];
    @Input() debugEventsInternal: Options['debugEventsInternal'];
    @Input() debugInvalidComponentFuncs: Options['debugInvalidComponentFuncs'];
    @Input() debugDeprecation: Options['debugDeprecation'];
    @Input() htmlOutputConfig: Options['htmlOutputConfig'];
    @Input() printAsHtml: Options['printAsHtml'];
    @Input() printConfig: Options['printConfig'];
    @Input() printStyled: Options['printStyled'];
    @Input() printRowRange: Options['printRowRange'];
    @Input() printHeader: Options['printHeader'];
    @Input() printFooter: Options['printFooter'];
    @Input() printFormatter: Options['printFormatter'];
    @Input() groupHeaderDownload: Options['groupHeaderDownload'];
    @Input() spreadsheet: Options['spreadsheet'];
    @Input() spreadsheetRows: Options['spreadsheetRows'];
    @Input() spreadsheetColumns: Options['spreadsheetColumns'];
    @Input() spreadsheetColumnDefinition: Options['spreadsheetColumnDefinition'];
    @Input() spreadsheetSheets: Options['spreadsheetSheets'];
    @Input() spreadsheetSheetTabs: Options['spreadsheetSheetTabs'];
    @Input() spreadsheetOutputFull: Options['spreadsheetOutputFull'];

    /**
     * Tabulator instance methods
     */
    download: Tabulator['download'];
    downloadToTab: Tabulator['downloadToTab'];
    import: Tabulator['import'];
    copyToClipboard: Tabulator['copyToClipboard'];
    undo: Tabulator['undo'];
    getHistoryUndoSize: Tabulator['getHistoryUndoSize'];
    redo: Tabulator['redo'];
    getHistoryRedoSize: Tabulator['getHistoryRedoSize'];
    getEditedCells: Tabulator['getEditedCells'];
    clearCellEdited: Tabulator['clearCellEdited'];
    alert: Tabulator['alert'];
    clearAlert: Tabulator['clearAlert'];
    destroy: Tabulator['destroy'];
    setData: Tabulator['setData'];
    clearData: Tabulator['clearData'];
    getData: Tabulator['getData'];
    getDataCount: Tabulator['getDataCount'];
    searchRows: Tabulator['searchRows'];
    searchData: Tabulator['searchData'];
    getHtml: Tabulator['getHtml'];
    print: Tabulator['print'];
    getAjaxUrl: Tabulator['getAjaxUrl'];
    replaceData: Tabulator['replaceData'];
    updateData: Tabulator['updateData'];
    addData: Tabulator['addData'];
    updateOrAddData: Tabulator['updateOrAddData'];
    getRow: Tabulator['getRow'];
    getRowFromPosition: Tabulator['getRowFromPosition'];
    deleteRow: Tabulator['deleteRow'];
    addRow: Tabulator['addRow'];
    updateOrAddRow: Tabulator['updateOrAddRow'];
    updateRow: Tabulator['updateRow'];
    scrollToRow: Tabulator['scrollToRow'];
    moveRow: Tabulator['moveRow'];
    getRows: Tabulator['getRows'];
    getRowPosition: Tabulator['getRowPosition'];
    setColumns: Tabulator['setColumns'];
    getColumns: Tabulator['getColumns'];
    getColumn: Tabulator['getColumn'];
    getColumnDefinitions: Tabulator['getColumnDefinitions'];
    getColumnLayout: Tabulator['getColumnLayout'];
    setColumnLayout: Tabulator['setColumnLayout'];
    showColumn: Tabulator['showColumn'];
    hideColumn: Tabulator['hideColumn'];
    toggleColumn: Tabulator['toggleColumn'];
    addColumn: Tabulator['addColumn'];
    deleteColumn: Tabulator['deleteColumn'];
    moveColumn: Tabulator['moveColumn'];
    scrollToColumn: Tabulator['scrollToColumn'];
    updateColumnDefinition: Tabulator['updateColumnDefinition'];
    setLocale: Tabulator['setLocale'];
    getLocale: Tabulator['getLocale'];
    getLang: Tabulator['getLang'];
    redraw: Tabulator['redraw'];
    blockRedraw: Tabulator['blockRedraw'];
    restoreRedraw: Tabulator['restoreRedraw'];
    setHeight: Tabulator['setHeight'];
    setSort: Tabulator['setSort'];
    getSorters: Tabulator['getSorters'];
    clearSort: Tabulator['clearSort'];
    setFilter: Tabulator['setFilter'];
    addFilter: Tabulator['addFilter'];
    getFilters: Tabulator['getFilters'];
    setHeaderFilterValue: Tabulator['setHeaderFilterValue'];
    setHeaderFilterFocus: Tabulator['setHeaderFilterFocus'];
    getHeaderFilters: Tabulator['getHeaderFilters'];
    getHeaderFilterValue: Tabulator['getHeaderFilterValue'];
    removeFilter: Tabulator['removeFilter'];
    clearFilter: Tabulator['clearFilter'];
    clearHeaderFilter: Tabulator['clearHeaderFilter'];
    selectRow: Tabulator['selectRow'];
    deselectRow: Tabulator['deselectRow'];
    toggleSelectRow: Tabulator['toggleSelectRow'];
    getSelectedRows: Tabulator['getSelectedRows'];
    getSelectedData: Tabulator['getSelectedData'];
    setMaxPage: Tabulator['setMaxPage'];
    setPage: Tabulator['setPage'];
    setPageToRow: Tabulator['setPageToRow'];
    setPageSize: Tabulator['setPageSize'];
    getPageSize: Tabulator['getPageSize'];
    previousPage: Tabulator['previousPage'];
    nextPage: Tabulator['nextPage'];
    getPage: Tabulator['getPage'];
    getPageMax: Tabulator['getPageMax'];
    setGroupBy: Tabulator['setGroupBy'];
    setGroupStartOpen: Tabulator['setGroupStartOpen'];
    setGroupHeader: Tabulator['setGroupHeader'];
    getGroups: Tabulator['getGroups'];
    getGroupedData: Tabulator['getGroupedData'];
    getCalcResults: Tabulator['getCalcResults'];
    recalc: Tabulator['recalc'];
    navigatePrev: Tabulator['navigatePrev'];
    navigateNext: Tabulator['navigateNext'];
    navigateLeft: Tabulator['navigateLeft'];
    navigateRight: Tabulator['navigateRight'];
    navigateUp: Tabulator['navigateUp'];
    navigateDown: Tabulator['navigateDown'];
    getInvalidCells: Tabulator['getInvalidCells'];
    clearCellValidation: Tabulator['clearCellValidation'];
    validate: Tabulator['validate'];
    setGroupValues: Tabulator['setGroupValues'];
    refreshFilter: Tabulator['refreshFilter'];
    clearHistory: Tabulator['clearHistory'];
    addRange: Tabulator['addRange'];
    getRanges: Tabulator['getRanges'];
    getRangeData: Tabulator['getRangeData'];
    setSheets: Tabulator['setSheets'];
    addSheet: Tabulator['addSheet'];
    getSheetDefinitions: Tabulator['getSheetDefinitions'];
    getSheets: Tabulator['getSheets'];
    getSheet: Tabulator['getSheet'];
    setSheetData: Tabulator['setSheetData'];
    getSheetData: Tabulator['getSheetData'];
    clearSheet: Tabulator['clearSheet'];
    activeSheet: Tabulator['activeSheet'];
    removeSheet: Tabulator['removeSheet'];
    on: Tabulator['on'];
    off: Tabulator['off'];

    private finalizers: Function[] = [];

    constructor(
        private readonly appRef: ApplicationRef,
        private readonly viewContainer: ViewContainerRef,
        private readonly ngZone: NgZone,
        private readonly injector: Injector
    ) { }

    ngAfterViewInit() {
        this.createTable()
    }

    ngOnChanges(changes?: SimpleChanges): void {
    }

    ngOnDestroy() {
        try {
            this.finalizers?.forEach(f => f());
        }
        catch(err) {
            console.warn("Failed to process all finalizers")
            console.warn(err);
        }
    }

    public render() {
        this.table?.redraw();
    }

    private createTable() {
        this.ngZone.runOutsideAngular(() => {
            this.table?.destroy();

            const options: Options = {
                ...this._getOptions(),
                columns: this._getColumns(),
                ...this.options,
                data: this.dataSource
            };

            // console.log(options)
            const table = this.table = new Tabulator(this.viewContainer.element.nativeElement, options);

            // table.on("rowClick", (e, row) => this.rowClick.next({ event: e, row, data: row.getData() as any }));
            // table.on("rowContext", (e, row) => this.rowContext.next({ event: e, row, data: row.getData() as any }));
            // table.on("rowDblClick", (e, row) => this.rowDblClick.next({ event: e, row, data: row.getData() as any }));
            // table.on("cellClick", (e, cell) => this.cellClick.next({ event: e, cell, data: cell.getData() as any }));
            // table.on("cellTap", (e, cell) => this.cellClick.next({ event: e, cell, data: cell.getData() as any }));

            // table.on("tableBuilt", () => {
            //     // table.redraw();
            // });

            // Bind callable methods from a table instance back onto the component.
            Object.entries(table)
                .filter(([k,v]) => typeof v == 'function')
                .forEach(([key, value]) => {
                    this[key] = value;
                })

                // debugger;
        })
    }

    private _getOptions() {
        const obj = getProps(this);

        return {
            ...obj,

        };
    }

    private _getColumns() {
        return this.columns.toArray().map(c => {
            const obj = getProps(c);

            obj['headerClick'] = (...args) => c.onHeaderClick?.emit([args] as any);
            obj['headerDblClick'] = (...args) => c.onHeaderDblClick?.emit([args] as any);
            obj['headerMouseDown'] = (...args) => c.onHeaderMouseDown?.emit([args] as any);
            obj['headerMouseUp'] = (...args) => c.onHeaderMouseUp?.emit([args] as any);
            obj['headerContext'] = (...args) => c.onHeaderContext?.emit([args] as any);
            obj['headerTap'] = (...args) => c.onHeaderTap?.emit([args] as any);
            obj['headerDblTap'] = (...args) => c.onHeaderDblTap?.emit([args] as any);
            obj['headerTapHold'] = (...args) => c.onHeaderTapHold?.emit([args] as any);
            obj['cellClick'] = (...args) => c.onCellClick?.emit([args] as any);
            obj['cellDblClick'] = (...args) => c.onCellDblClick?.emit([args] as any);
            obj['cellContext'] = (...args) => c.onCellContext?.emit([args] as any);
            obj['cellTap'] = (...args) => c.onCellTap?.emit([args] as any);
            obj['cellDblTap'] = (...args) => c.onCellDblTap?.emit([args] as any);
            obj['cellTapHold'] = (...args) => c.onCellTapHold?.emit([args] as any);
            obj['cellMouseEnter'] = (...args) => c.onCellMouseEnter?.emit([args] as any);
            obj['cellMouseLeave'] = (...args) => c.onCellMouseLeave?.emit([args] as any);
            obj['cellMouseOver'] = (...args) => c.onCellMouseOver?.emit([args] as any);
            obj['cellMouseOut'] = (...args) => c.onCellMouseOut?.emit([args] as any);
            obj['cellMouseMove'] = (...args) => c.onCellMouseMove?.emit([args] as any);
            obj['cellEditing'] = (...args) => c.onCellEditing?.emit([args] as any);
            obj['cellEdited'] = (...args) => c.onCellEdited?.emit([args] as any);
            obj['cellEditCancelled'] = (...args) => c.onCellEditCancelled?.emit([args] as any);
            obj['cellMouseDown'] = (...args) => c.onCellMouseDown?.emit([args] as any);
            obj['cellMouseUp'] = (...args) => c.onCellMouseUp?.emit([args] as any);

            obj['formatter'] = !c.cellTemplate ? undefined : (cell, formatterParams, onRendered) => {
                try {
                    const el = document.createElement('div');
                    const componentInstance = createComponent(TemplateWrapper, {
                        elementInjector: this.injector,
                        environmentInjector: this.appRef.injector,
                        hostElement: el
                    });
                    this.appRef.attachView(componentInstance.hostView);

                    componentInstance.instance.template = c.cellTemplate;
                    componentInstance.instance.data = cell.getData();

                    componentInstance.changeDetectorRef.detectChanges();

                    this.finalizers.push(() => {
                        this.appRef?.detachView(componentInstance?.hostView);
                        componentInstance?.destroy();
                        el?.remove();
                    })

                    return el;
                }
                catch(err) {
                    console.error(err)
                    return null;
                }
            }

            return obj;
        })
    }
}
