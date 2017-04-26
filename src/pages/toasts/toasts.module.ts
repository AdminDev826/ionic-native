import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ToastsPage } from './toasts.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ToastsPage],
	entryComponents: [ToastsPage]
})
export class ToastsModule {

}