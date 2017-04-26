import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { LocalNotificationsPage } from './local-notifications.page';

@NgModule({
	imports: [IonicModule],
	declarations: [LocalNotificationsPage],
	entryComponents: [LocalNotificationsPage]
})
export class LocalNotificationsModule {

}