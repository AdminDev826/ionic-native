import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { DevicePage } from './device.page';

@NgModule({
	imports: [IonicModule],
	declarations: [DevicePage],
	entryComponents: [DevicePage]
})
export class DeviceModule {

}