import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ShakePage } from './shake.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ShakePage],
	entryComponents: [ShakePage]
})
export class ShakeModule {

}