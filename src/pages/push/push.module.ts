import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { PushSenderService } from '../../pages/push/push-sender.service';
import { PushListenerService } from '../../pages/push/push-listener.service';

import { PushPage } from './push.page';

@NgModule({
	imports: [IonicModule],
	declarations: [PushPage],
	entryComponents: [PushPage],
	providers: [
		PushSenderService,
		PushListenerService
	]
})
export class PushModule {

}