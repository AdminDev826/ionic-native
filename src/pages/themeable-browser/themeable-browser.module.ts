import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ThemeableBrowserPage } from './themeable-browser.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ThemeableBrowserPage],
	entryComponents: [ThemeableBrowserPage]
})
export class ThemeableBrowserModule {

}