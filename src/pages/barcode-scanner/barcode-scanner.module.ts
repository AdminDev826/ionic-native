import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { BarcodeScannerPage } from './barcode-scanner.page';

@NgModule({
	imports: [IonicModule],
	declarations: [BarcodeScannerPage],
	entryComponents: [BarcodeScannerPage]
})
export class BarcodeScannerModule {

}