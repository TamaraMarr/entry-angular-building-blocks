import { ChangeDetectionStrategy, Component, DEFAULT_CURRENCY_CODE, Inject, Input, ViewEncapsulation } from '@angular/core';

import { ColumnDef, DEFAULT_DATE_FORMAT, DEFAULT_TIMEZONE } from './grid.interface';

@Component({
  selector: 'enigmatry-grid-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnigmatryGridCellComponent<T> {
  @Input() rowData: T;
  @Input() colDef: ColumnDef;

  constructor(
    @Inject(DEFAULT_DATE_FORMAT) public defaultDateFormat: string,
    @Inject(DEFAULT_TIMEZONE) public defaultTimezone: string,
    @Inject(DEFAULT_CURRENCY_CODE) public defaultCurrencyCode: string) {
  }

  get value(): any {
    return this.getCellValue(this.rowData, this.colDef);
  }

  private getCellValue(rowData: T, colDef: ColumnDef) {
    const keys = colDef.field ? colDef.field.split('.') : [];
    return keys.reduce((data, key) => data && (data as any)[key], rowData);
  }

}
