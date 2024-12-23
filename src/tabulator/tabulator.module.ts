import { NgModule } from '@angular/core';
import { TabulatorComponent } from './tabulator.component';
import { ColumnDirective } from './column.directive';

@NgModule({
    declarations: [
        TabulatorComponent,
        ColumnDirective
   ],
    exports: [
        TabulatorComponent,
        ColumnDirective
    ]
})
export class TabulatorModule { }
