import { NgTemplateOutlet } from '@angular/common';
import { ApplicationRef, Component, ContentChildren, createComponent, EventEmitter, Injector, Input, NgZone, Output, QueryList, SimpleChanges, TemplateRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CellComponent, EventCallBackMethods, Options, RowComponent, TabulatorFull as Tabulator } from 'tabulator-tables';
import { ColumnDirective } from './column.directive';

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
        if (['tabulator', 'cellTemplate', 'headerTemplate'].includes(k)) return;

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
    styleUrls: [],
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

    @Output() validationFailed = new EventEmitter<Parameters<EventCallBackMethods['validationFailed']>>();
    @Output() scrollHorizontal = new EventEmitter<Parameters<EventCallBackMethods['scrollHorizontal']>>();
    @Output() scrollVertical = new EventEmitter<Parameters<EventCallBackMethods['scrollVertical']>>();
    @Output() rowAdded = new EventEmitter<Parameters<EventCallBackMethods['rowAdded']>>();
    @Output() rowDeleted = new EventEmitter<Parameters<EventCallBackMethods['rowDeleted']>>();
    @Output() rowMoving = new EventEmitter<Parameters<EventCallBackMethods['rowMoving']>>();
    @Output() rowMoved = new EventEmitter<Parameters<EventCallBackMethods['rowMoved']>>();
    @Output() rowMoveCancelled = new EventEmitter<Parameters<EventCallBackMethods['rowMoveCancelled']>>();
    @Output() rowUpdated = new EventEmitter<Parameters<EventCallBackMethods['rowUpdated']>>();
    @Output() rowSelectionChanged = new EventEmitter<Parameters<EventCallBackMethods['rowSelectionChanged']>>();
    @Output() rowSelected = new EventEmitter<Parameters<EventCallBackMethods['rowSelected']>>();
    @Output() rowDeselected = new EventEmitter<Parameters<EventCallBackMethods['rowDeselected']>>();
    @Output() rowResized = new EventEmitter<Parameters<EventCallBackMethods['rowResized']>>();
    @Output() rowClick = new EventEmitter<Parameters<EventCallBackMethods['rowClick']>>();
    @Output() rowDblClick = new EventEmitter<Parameters<EventCallBackMethods['rowDblClick']>>();
    @Output() rowContext = new EventEmitter<Parameters<EventCallBackMethods['rowContext']>>();
    @Output() rowTap = new EventEmitter<Parameters<EventCallBackMethods['rowTap']>>();
    @Output() rowDblTap = new EventEmitter<Parameters<EventCallBackMethods['rowDblTap']>>();
    @Output() rowTapHold = new EventEmitter<Parameters<EventCallBackMethods['rowTapHold']>>();
    @Output() rowMouseEnter = new EventEmitter<Parameters<EventCallBackMethods['rowMouseEnter']>>();
    @Output() rowMouseLeave = new EventEmitter<Parameters<EventCallBackMethods['rowMouseLeave']>>();
    @Output() rowMouseOver = new EventEmitter<Parameters<EventCallBackMethods['rowMouseOver']>>();
    @Output() rowMouseDown = new EventEmitter<Parameters<EventCallBackMethods['rowMouseDown']>>();
    @Output() rowMouseUp = new EventEmitter<Parameters<EventCallBackMethods['rowMouseUp']>>();
    @Output() rowMouseOut = new EventEmitter<Parameters<EventCallBackMethods['rowMouseOut']>>();
    @Output() rowMouseMove = new EventEmitter<Parameters<EventCallBackMethods['rowMouseMove']>>();
    @Output() htmlImporting = new EventEmitter<Parameters<EventCallBackMethods['htmlImporting']>>();
    @Output() htmlImported = new EventEmitter<Parameters<EventCallBackMethods['htmlImported']>>();
    @Output() ajaxError = new EventEmitter<Parameters<EventCallBackMethods['ajaxError']>>();
    @Output() clipboardCopied = new EventEmitter<Parameters<EventCallBackMethods['clipboardCopied']>>();
    @Output() clipboardPasted = new EventEmitter<Parameters<EventCallBackMethods['clipboardPasted']>>();
    @Output() clipboardPasteError = new EventEmitter<Parameters<EventCallBackMethods['clipboardPasteError']>>();
    @Output() downloadComplete = new EventEmitter<Parameters<EventCallBackMethods['downloadComplete']>>();
    @Output() dataTreeRowExpanded = new EventEmitter<Parameters<EventCallBackMethods['dataTreeRowExpanded']>>();
    @Output() dataTreeRowCollapsed = new EventEmitter<Parameters<EventCallBackMethods['dataTreeRowCollapsed']>>();
    @Output() pageLoaded = new EventEmitter<Parameters<EventCallBackMethods['pageLoaded']>>();
    @Output() pageSizeChanged = new EventEmitter<Parameters<EventCallBackMethods['pageSizeChanged']>>();
    @Output() headerClick = new EventEmitter<Parameters<EventCallBackMethods['headerClick']>>();
    @Output() headerDblClick = new EventEmitter<Parameters<EventCallBackMethods['headerDblClick']>>();
    @Output() headerContext = new EventEmitter<Parameters<EventCallBackMethods['headerContext']>>();
    @Output() headerTap = new EventEmitter<Parameters<EventCallBackMethods['headerTap']>>();
    @Output() headerDblTap = new EventEmitter<Parameters<EventCallBackMethods['headerDblTap']>>();
    @Output() headerTapHold = new EventEmitter<Parameters<EventCallBackMethods['headerTapHold']>>();
    @Output() headerMouseUp = new EventEmitter<Parameters<EventCallBackMethods['headerMouseUp']>>();
    @Output() headerMouseDown = new EventEmitter<Parameters<EventCallBackMethods['headerMouseDown']>>();
    @Output() groupClick = new EventEmitter<Parameters<EventCallBackMethods['groupClick']>>();
    @Output() groupDblClick = new EventEmitter<Parameters<EventCallBackMethods['groupDblClick']>>();
    @Output() groupContext = new EventEmitter<Parameters<EventCallBackMethods['groupContext']>>();
    @Output() groupTap = new EventEmitter<Parameters<EventCallBackMethods['groupTap']>>();
    @Output() groupDblTap = new EventEmitter<Parameters<EventCallBackMethods['groupDblTap']>>();
    @Output() groupTapHold = new EventEmitter<Parameters<EventCallBackMethods['groupTapHold']>>();
    @Output() groupMouseDown = new EventEmitter<Parameters<EventCallBackMethods['groupMouseDown']>>();
    @Output() groupMouseUp = new EventEmitter<Parameters<EventCallBackMethods['groupMouseUp']>>();
    @Output() tableBuilding = new EventEmitter<Parameters<EventCallBackMethods['tableBuilding']>>();
    @Output() tableBuilt = new EventEmitter<Parameters<EventCallBackMethods['tableBuilt']>>();
    @Output() tableDestroyed = new EventEmitter<Parameters<EventCallBackMethods['tableDestroyed']>>();
    @Output() dataChanged = new EventEmitter<Parameters<EventCallBackMethods['dataChanged']>>();
    @Output() dataLoading = new EventEmitter<Parameters<EventCallBackMethods['dataLoading']>>();
    @Output() dataLoaded = new EventEmitter<Parameters<EventCallBackMethods['dataLoaded']>>();
    @Output() dataLoadError = new EventEmitter<Parameters<EventCallBackMethods['dataLoadError']>>();
    @Output() dataProcessing = new EventEmitter<Parameters<EventCallBackMethods['dataProcessing']>>();
    @Output() dataProcessed = new EventEmitter<Parameters<EventCallBackMethods['dataProcessed']>>();
    @Output() dataFiltering = new EventEmitter<Parameters<EventCallBackMethods['dataFiltering']>>();
    @Output() dataFiltered = new EventEmitter<Parameters<EventCallBackMethods['dataFiltered']>>();
    @Output() dataSorting = new EventEmitter<Parameters<EventCallBackMethods['dataSorting']>>();
    @Output() dataSorted = new EventEmitter<Parameters<EventCallBackMethods['dataSorted']>>();
    @Output() movableRowsSendingStart = new EventEmitter<Parameters<EventCallBackMethods['movableRowsSendingStart']>>();
    @Output() movableRowsSent = new EventEmitter<Parameters<EventCallBackMethods['movableRowsSent']>>();
    @Output() movableRowsSentFailed = new EventEmitter<Parameters<EventCallBackMethods['movableRowsSentFailed']>>();
    @Output() movableRowsSendingStop = new EventEmitter<Parameters<EventCallBackMethods['movableRowsSendingStop']>>();
    @Output() movableRowsReceivingStart = new EventEmitter<Parameters<EventCallBackMethods['movableRowsReceivingStart']>>();
    @Output() movableRowsReceived = new EventEmitter<Parameters<EventCallBackMethods['movableRowsReceived']>>();
    @Output() movableRowsReceivedFailed = new EventEmitter<Parameters<EventCallBackMethods['movableRowsReceivedFailed']>>();
    @Output() movableRowsReceivingStop = new EventEmitter<Parameters<EventCallBackMethods['movableRowsReceivingStop']>>();
    @Output() movableRowsElementDrop = new EventEmitter<Parameters<EventCallBackMethods['movableRowsElementDrop']>>();
    @Output() dataGrouping = new EventEmitter<Parameters<EventCallBackMethods['dataGrouping']>>();
    @Output() dataGrouped = new EventEmitter<Parameters<EventCallBackMethods['dataGrouped']>>();
    @Output() groupVisibilityChanged = new EventEmitter<Parameters<EventCallBackMethods['groupVisibilityChanged']>>();
    @Output() localized = new EventEmitter<Parameters<EventCallBackMethods['localized']>>();
    @Output() renderStarted = new EventEmitter<Parameters<EventCallBackMethods['renderStarted']>>();
    @Output() renderComplete = new EventEmitter<Parameters<EventCallBackMethods['renderComplete']>>();
    @Output() columnMoved = new EventEmitter<Parameters<EventCallBackMethods['columnMoved']>>();
    @Output() columnResized = new EventEmitter<Parameters<EventCallBackMethods['columnResized']>>();
    @Output() columnTitleChanged = new EventEmitter<Parameters<EventCallBackMethods['columnTitleChanged']>>();
    @Output() columnVisibilityChanged = new EventEmitter<Parameters<EventCallBackMethods['columnVisibilityChanged']>>();
    @Output() historyUndo = new EventEmitter<Parameters<EventCallBackMethods['historyUndo']>>();
    @Output() historyRedo = new EventEmitter<Parameters<EventCallBackMethods['historyRedo']>>();
    @Output() cellEditing = new EventEmitter<Parameters<EventCallBackMethods['cellEditing']>>();
    @Output() cellEdited = new EventEmitter<Parameters<EventCallBackMethods['cellEdited']>>();
    @Output() cellEditCancelled = new EventEmitter<Parameters<EventCallBackMethods['cellEditCancelled']>>();
    @Output() cellClick = new EventEmitter<Parameters<EventCallBackMethods['cellClick']>>();
    @Output() cellDblClick = new EventEmitter<Parameters<EventCallBackMethods['cellDblClick']>>();
    @Output() cellContext = new EventEmitter<Parameters<EventCallBackMethods['cellContext']>>();
    @Output() cellMouseDown = new EventEmitter<Parameters<EventCallBackMethods['cellMouseDown']>>();
    @Output() cellMouseUp = new EventEmitter<Parameters<EventCallBackMethods['cellMouseUp']>>();
    @Output() cellTap = new EventEmitter<Parameters<EventCallBackMethods['cellTap']>>();
    @Output() cellDblTap = new EventEmitter<Parameters<EventCallBackMethods['cellDblTap']>>();
    @Output() cellTapHold = new EventEmitter<Parameters<EventCallBackMethods['cellTapHold']>>();
    @Output() cellMouseEnter = new EventEmitter<Parameters<EventCallBackMethods['cellMouseEnter']>>();
    @Output() cellMouseLeave = new EventEmitter<Parameters<EventCallBackMethods['cellMouseLeave']>>();
    @Output() cellMouseOver = new EventEmitter<Parameters<EventCallBackMethods['cellMouseOver']>>();
    @Output() cellMouseOut = new EventEmitter<Parameters<EventCallBackMethods['cellMouseOut']>>();
    @Output() cellMouseMove = new EventEmitter<Parameters<EventCallBackMethods['cellMouseMove']>>();
    @Output() popupOpen = new EventEmitter<Parameters<EventCallBackMethods['popupOpen']>>();
    @Output() popupClosed = new EventEmitter<Parameters<EventCallBackMethods['popupClosed']>>();
    @Output() menuClosed = new EventEmitter<Parameters<EventCallBackMethods['menuClosed']>>();
    @Output() menuOpened = new EventEmitter<Parameters<EventCallBackMethods['menuOpened']>>();
    @Output() TooltipClosed = new EventEmitter<Parameters<EventCallBackMethods['TooltipClosed']>>();
    @Output() TooltipOpened = new EventEmitter<Parameters<EventCallBackMethods['TooltipOpened']>>();
    @Output() rangeAdded = new EventEmitter<Parameters<EventCallBackMethods['rangeAdded']>>();
    @Output() rangeChanged = new EventEmitter<Parameters<EventCallBackMethods['rangeChanged']>>();
    @Output() rangeRemoved = new EventEmitter<Parameters<EventCallBackMethods['rangeRemoved']>>();
    @Output() rowHeightChange = new EventEmitter<Parameters<EventCallBackMethods['rowHeight']>>();
    @Output() rowResizing = new EventEmitter<Parameters<EventCallBackMethods['rowResizing']>>();
    @Output() columnWidth = new EventEmitter<Parameters<EventCallBackMethods['columnWidth']>>();
    @Output() columnResizing = new EventEmitter<Parameters<EventCallBackMethods['columnResizing']>>();
    @Output() sheetAdded = new EventEmitter<Parameters<EventCallBackMethods['sheetAdded']>>();
    @Output() sheetLoaded = new EventEmitter<Parameters<EventCallBackMethods['sheetLoaded']>>();
    @Output() sheetUpdated = new EventEmitter<Parameters<EventCallBackMethods['sheetUpdated']>>();
    @Output() sheetRemoved = new EventEmitter<Parameters<EventCallBackMethods['sheetRemoved']>>();
    @Output() columnsLoaded = new EventEmitter<Parameters<EventCallBackMethods['columnsLoaded']>>();
    @Output() importChoose = new EventEmitter<Parameters<EventCallBackMethods['importChoose']>>();
    @Output() importImporting = new EventEmitter<Parameters<EventCallBackMethods['importImporting']>>();
    @Output() importError = new EventEmitter<Parameters<EventCallBackMethods['importError']>>();
    @Output() importImported = new EventEmitter<Parameters<EventCallBackMethods['importImported']>>();


    private finalizers: Function[] = [];

    constructor(
        private readonly appRef: ApplicationRef,
        private readonly viewContainer: ViewContainerRef,
        private readonly ngZone: NgZone,
        private readonly injector: Injector
    ) { }

    ngAfterViewInit() {
        this.createTable();
    }

    ngOnChanges(changes?: SimpleChanges): void {
    }

    ngOnDestroy() {
        try {
            this.finalizers?.forEach(f => f());
        }
        catch (err) {
            console.warn("Failed to process all finalizers");
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

            // Generically bind all event emitters to the tabulator instance.
            Object.entries(this).forEach(([k, v]) => {
                if (!(v instanceof EventEmitter)) return;
                table.on(k as any, (...args) => v.emit([args]));
            });

            // Bind callable methods from a table instance back onto the component.
            Object.entries(table)
                .filter(([k, v]) => typeof v == 'function')
                .forEach(([key, value]) => {
                    this[key] = value;
                });

            // debugger;
        });
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

            Object.entries(c).forEach(([k, v]) => {
                if (!(v instanceof EventEmitter)) return;
                const key = k.replace(/^on/, '');
                const mappedKey = key.charAt(0).toLowerCase() + key.slice(1);
                obj[mappedKey] = (...args) => v.emit([args]);
            });

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
                    });

                    return el;
                }
                catch (err) {
                    console.error(err);
                    return null;
                }
            };

            return obj;
        });
    }
}
