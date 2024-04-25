import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntryDateTimePickerModule } from "@enigmatry/entry-components/date-time-picker";
import { MinMaxComponent } from './min-max/min-max.component';
import { BasicDateTimePickerComponent } from './basic/basic.component';
import { DisableComponent } from './disable/disable.component';
import { MeridiemComponent } from './meridiem/meridiem.component';
import { provideEntryNativeTimeAdapter } from "@enigmatry/entry-components/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateFnsAdapter } from "@angular/material-date-fns-adapter";
import { DateAdapter, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    BasicDateTimePickerComponent,
    MinMaxComponent,
    DisableComponent,
    MeridiemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntryDateTimePickerModule,
    MatCheckboxModule
  ],
  exports: [
    BasicDateTimePickerComponent,
    DisableComponent
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    provideEntryNativeTimeAdapter({
      parse: {
        dateInput: ['dd-MM-yyyy', 'dd-MM-yyyy HH', 'dd-MM-yyyy HH:mm'],
      },
      display: {
        dateInput: 'dd-MM-yyyy HH:mm',
        monthYearLabel: 'LLL uuuu',
        dateA11yLabel: 'PP',
        monthYearA11yLabel: 'LLLL uuuu',
      }
    })
  ]
})
export class DateTimePickerExampleModule { }