import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { CalendarPage } from './calendar.page';

@NgModule({
	imports: [IonicModule],
	declarations: [CalendarPage],
	entryComponents: [CalendarPage]
})
export class CalendarModule {

}