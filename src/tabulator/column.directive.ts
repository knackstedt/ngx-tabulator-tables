import { ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { TabulatorComponent } from './tabulator.component';
import { ColumnDefinition } from 'tabulator-tables';

type OutputKeys = 'headerClick' | 'headerDblClick' | 'headerMouseDown' | 'headerMouseUp' | 'headerContext' | 'headerTap' | 'headerDblTap' | 'headerTapHold' | 'cellClick' | 'cellDblClick' | 'cellContext' | 'cellTap' | 'cellDblTap' | 'cellTapHold' | 'cellMouseEnter' | 'cellMouseLeave' | 'cellMouseOver' | 'cellMouseOut' | 'cellMouseMove' | 'cellEditing' | 'cellEdited' | 'cellEditCancelled' | 'cellMouseDown' | 'cellMouseUp'

@Directive({
    selector: 'ngx-tabulator>ngx-tabulator-column'
})
export class ColumnDirective implements Omit<ColumnDefinition, OutputKeys> {

    @Input() accessorClipboard: ColumnDefinition['accessorClipboard'];
    @Input() accessor: ColumnDefinition['accessor'];
    @Input() accessorClipboardParams: ColumnDefinition['accessorClipboardParams'];
    @Input() accessorDownload: ColumnDefinition['accessorDownload'];
    @Input() accessorDownloadParams: ColumnDefinition['accessorDownloadParams'];
    @Input() accessorHtmlOutput: ColumnDefinition['accessorHtmlOutput'];
    @Input() accessorHtmlOutputParams: ColumnDefinition['accessorHtmlOutputParams'];
    @Input() accessorParams: ColumnDefinition['accessorParams'];
    @Input() accessorPrint: ColumnDefinition['accessorPrint'];
    @Input() accessorPrintParams: ColumnDefinition['accessorPrintParams'];
    @Input() bottomCalc: ColumnDefinition['bottomCalc'];
    @Input() bottomCalcFormatter: ColumnDefinition['bottomCalcFormatter'];
    @Input() bottomCalcFormatterParams: ColumnDefinition['bottomCalcFormatterParams'];
    @Input() bottomCalcParams: ColumnDefinition['bottomCalcParams'];
    @Input() cellPopup: ColumnDefinition['cellPopup'];
    @Input() clickMenu: ColumnDefinition['clickMenu'];
    @Input() clipboard: ColumnDefinition['clipboard'];
    @Input() columns: ColumnDefinition['columns'];
    @Input() contextMenu: ColumnDefinition['contextMenu'];
    @Input() cssClass: ColumnDefinition['cssClass'];
    @Input() dblClickMenu: ColumnDefinition['dblClickMenu'];
    @Input() dblClickPopup: ColumnDefinition['dblClickPopup'];
    @Input() download: ColumnDefinition['download'];
    @Input() editable: ColumnDefinition['editable'];
    @Input() editableTitle: ColumnDefinition['editableTitle'];
    @Input() editor: ColumnDefinition['editor'];
    @Input() editorEmptyValue: ColumnDefinition['editorEmptyValue'];
    @Input() editorEmptyValueFunc: ColumnDefinition['editorEmptyValueFunc'];
    @Input() editorParams: ColumnDefinition['editorParams'];
    @Input() field: ColumnDefinition['field'];
    @Input() formatter: ColumnDefinition['formatter'];
    @Input() formatterClipboard: ColumnDefinition['formatterClipboard'];
    @Input() formatterClipboardParams: ColumnDefinition['formatterClipboardParams'];
    @Input() formatterHtmlOutput: ColumnDefinition['formatterHtmlOutput'];
    @Input() formatterHtmlOutputParams: ColumnDefinition['formatterHtmlOutputParams'];
    @Input() formatterParams: ColumnDefinition['formatterParams'];
    @Input() formatterPrint: ColumnDefinition['formatterPrint'];
    @Input() formatterPrintParams: ColumnDefinition['formatterPrintParams'];
    @Input() frozen: ColumnDefinition['frozen'];
    @Input() headerContextMenu: ColumnDefinition['headerContextMenu'];
    @Input() headerDblClickMenu: ColumnDefinition['headerDblClickMenu'];
    @Input() headerDblClickPopup: ColumnDefinition['headerDblClickPopup'];
    @Input() headerFilter: ColumnDefinition['headerFilter'];
    @Input() headerFilterEmptyCheck: ColumnDefinition['headerFilterEmptyCheck'];
    @Input() headerFilterFunc: ColumnDefinition['headerFilterFunc'];
    @Input() headerFilterFuncParams: ColumnDefinition['headerFilterFuncParams'];
    @Input() headerFilterLiveFilter: ColumnDefinition['headerFilterLiveFilter'];
    @Input() headerFilterParams: ColumnDefinition['headerFilterParams'];
    @Input() headerFilterPlaceholder: ColumnDefinition['headerFilterPlaceholder'];
    @Input() headerHozAlign: ColumnDefinition['headerHozAlign'];
    @Input() headerMenu: ColumnDefinition['headerMenu'];
    @Input() headerMenuIcon: ColumnDefinition['headerMenuIcon'];
    @Input() headerSort: ColumnDefinition['headerSort'];
    @Input() headerSortStartingDir: ColumnDefinition['headerSortStartingDir'];
    @Input() headerSortTristate: ColumnDefinition['headerSortTristate'];
    @Input() headerTooltip: ColumnDefinition['headerTooltip'];
    @Input() headerVertical: ColumnDefinition['headerVertical'];
    @Input() headerWordWrap: ColumnDefinition['headerWordWrap'];
    @Input() hideInHtml: ColumnDefinition['hideInHtml'];
    @Input() hozAlign: ColumnDefinition['hozAlign'];
    @Input() htmlOutput: ColumnDefinition['htmlOutput'];
    @Input() maxWidth: ColumnDefinition['maxWidth'];
    @Input() minWidth: ColumnDefinition['minWidth'];
    @Input() mutator: ColumnDefinition['mutator'];
    @Input() mutatorClipboard: ColumnDefinition['mutatorClipboard'];
    @Input() mutatorClipboardParams: ColumnDefinition['mutatorClipboardParams'];
    @Input() mutatorData: ColumnDefinition['mutatorData'];
    @Input() mutatorDataParams: ColumnDefinition['mutatorDataParams'];
    @Input() mutatorEdit: ColumnDefinition['mutatorEdit'];
    @Input() mutatorEditParams: ColumnDefinition['mutatorEditParams'];
    @Input() mutatorParams: ColumnDefinition['mutatorParams'];
    @Input() print: ColumnDefinition['print'];
    @Input() resizable: ColumnDefinition['resizable'];
    @Input() responsive: ColumnDefinition['responsive'];
    @Input() rowHandle: ColumnDefinition['rowHandle'];
    @Input() sorter: ColumnDefinition['sorter'];
    @Input() sorterParams: ColumnDefinition['sorterParams'];
    @Input() title: ColumnDefinition['title'];
    @Input() titleClipboard: ColumnDefinition['titleClipboard'];
    @Input() titleDownload: ColumnDefinition['titleDownload'];
    @Input() titleFormatter: ColumnDefinition['titleFormatter'];
    @Input() titleFormatterParams: ColumnDefinition['titleFormatterParams'];
    @Input() titleHtmlOutput: ColumnDefinition['titleHtmlOutput'];
    @Input() titlePrint: ColumnDefinition['titlePrint'];
    @Input() tooltip: ColumnDefinition['tooltip'];
    @Input() topCalc: ColumnDefinition['topCalc'];
    @Input() topCalcFormatter: ColumnDefinition['topCalcFormatter'];
    @Input() topCalcFormatterParams: ColumnDefinition['topCalcFormatterParams'];
    @Input() topCalcParams: ColumnDefinition['topCalcParams'];
    @Input() validator: ColumnDefinition['validator'];
    @Input() variableHeight: ColumnDefinition['variableHeight'];
    @Input() vertAlign: ColumnDefinition['vertAlign'];
    @Input() visible: ColumnDefinition['visible'];
    @Input() width: ColumnDefinition['width'];
    @Input() widthGrow: ColumnDefinition['widthGrow'];
    @Input() widthShrink: ColumnDefinition['widthShrink'];

    // @Output() onClick = new EventEmitter<Parameters<MiniMapProps['onClick']>>();
    // @Output() onNodeClick = new EventEmitter<Parameters<MiniMapProps['onNodeClick']>>();

    @Output() onHeaderClick = new EventEmitter<[Parameters<ColumnDefinition['headerClick']>]>()
    @Output() onHeaderDblClick = new EventEmitter<[Parameters<ColumnDefinition['headerDblClick']>]>()
    @Output() onHeaderMouseDown = new EventEmitter<[Parameters<ColumnDefinition['headerMouseDown']>]>()
    @Output() onHeaderMouseUp = new EventEmitter<[Parameters<ColumnDefinition['headerMouseUp']>]>()
    @Output() onHeaderContext = new EventEmitter<[Parameters<ColumnDefinition['headerContext']>]>()
    @Output() onHeaderTap = new EventEmitter<[Parameters<ColumnDefinition['headerTap']>]>()
    @Output() onHeaderDblTap = new EventEmitter<[Parameters<ColumnDefinition['headerDblTap']>]>()
    @Output() onHeaderTapHold = new EventEmitter<[Parameters<ColumnDefinition['headerTapHold']>]>()
    @Output() onCellClick = new EventEmitter<[Parameters<ColumnDefinition['cellClick']>]>()
    @Output() onCellDblClick = new EventEmitter<[Parameters<ColumnDefinition['cellDblClick']>]>()
    @Output() onCellContext = new EventEmitter<[Parameters<ColumnDefinition['cellContext']>]>()
    @Output() onCellTap = new EventEmitter<[Parameters<ColumnDefinition['cellTap']>]>()
    @Output() onCellDblTap = new EventEmitter<[Parameters<ColumnDefinition['cellDblTap']>]>()
    @Output() onCellTapHold = new EventEmitter<[Parameters<ColumnDefinition['cellTapHold']>]>()
    @Output() onCellMouseEnter = new EventEmitter<[Parameters<ColumnDefinition['cellMouseEnter']>]>()
    @Output() onCellMouseLeave = new EventEmitter<[Parameters<ColumnDefinition['cellMouseLeave']>]>()
    @Output() onCellMouseOver = new EventEmitter<[Parameters<ColumnDefinition['cellMouseOver']>]>()
    @Output() onCellMouseOut = new EventEmitter<[Parameters<ColumnDefinition['cellMouseOut']>]>()
    @Output() onCellMouseMove = new EventEmitter<[Parameters<ColumnDefinition['cellMouseMove']>]>()
    @Output() onCellEditing = new EventEmitter<[Parameters<ColumnDefinition['cellEditing']>]>()
    @Output() onCellEdited = new EventEmitter<[Parameters<ColumnDefinition['cellEdited']>]>()
    @Output() onCellEditCancelled = new EventEmitter<[Parameters<ColumnDefinition['cellEditCancelled']>]>()
    @Output() onCellMouseDown = new EventEmitter<[Parameters<ColumnDefinition['cellMouseDown']>]>()
    @Output() onCellMouseUp = new EventEmitter<[Parameters<ColumnDefinition['cellMouseUp']>]>()

    @ContentChild(TemplateRef) cellTemplate: TemplateRef<any>;
    @ContentChild('headerTemplate', { read: TemplateRef }) headerTemplate: TemplateRef<any>;
    // @ContentChild(TemplateRef) template2: TemplateRef<any>;

    constructor(private readonly tabulator: TabulatorComponent) { }
    ngOnChanges() {
        this.tabulator.ngOnChanges();
    }
}
