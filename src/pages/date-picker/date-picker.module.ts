import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { DatePickerPage } from './date-picker.page';

@NgModule({
	imports: [IonicModule],
	declarations: [DatePickerPage],
	entryComponents: [DatePickerPage]
})
export class DatePickerModule {

}