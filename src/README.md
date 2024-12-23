# ngx-tabulator-tables

> This project is currently in a beta phase and features will be added upon pull requests.
I will try to minimize breaking changes between minor version revisions but some may be made until we reach 1.0.0.

This project is a proper Angular wrapper of [Tabulator](https://tabulator.info/).

## Quickstart
### Install the Package
```bash
npm install ngx-tabulator-tables
```

### Import the module into your component
```ts
import { Component } from '@angular/core';
import { TabulatorModule } from 'ngx-tabulator-tables';

@Component({
    selector: 'app-test',
    template: '<ngx-tabulator [dataSource]="data" [autoColumns]="true"/>',
    imports: [
        TabulatorModule
    ],
    standalone: true
})
export class TestComponent {
    data = [
        { id: 1, name: "Oli Bob", progress: 12, gender: "male", rating: 1, col: "red", dob: "19/02/1984", car: 1 },
        { id: 2, name: "Mary May", progress: 1, gender: "female", rating: 2, col: "blue", dob: "14/05/1982", car: true },
        { id: 3, name: "Christine Lobowski", progress: 42, gender: "female", rating: 0, col: "green", dob: "22/05/1982", car: "true" },
        { id: 4, name: "Brendon Philips", progress: 100, gender: "male", rating: 1, col: "orange", dob: "01/08/1980" },
        { id: 5, name: "Margret Marmajuke", progress: 16, gender: "female", rating: 5, col: "yellow", dob: "31/01/1999" },
        { id: 6, name: "Frank Harbours", progress: 38, gender: "male", rating: 4, col: "red", dob: "12/05/1966", car: 1 },
    ]}

```

## Examples

### Basic Configuration

```html
<ngx-tabulator
    [dataSource]="data"
>
    <ngx-tabulator-column
        field="id"
        title="ID"
    />
    <ngx-tabulator-column
        field="label"
        title="Name"
    />
</ngx-tabulator>
```


### Custom Cells

```html
<ngx-tabulator
    [dataSource]="data"
>
    <ngx-tabulator-column
        field="id"
        title="ID"
    />
    <ngx-tabulator-column
        field="label"
        title="Name"
    >
        <ng-template let-data>
            @if (data.color == "red") {
                <div style="color: red">{{data.name}}</div>
            }
            @else {
                <div style="color: green">{{data.name}}</div>
            }
        </ng-template>
    </ngx-tabulator-column>

</ngx-tabulator>
```

