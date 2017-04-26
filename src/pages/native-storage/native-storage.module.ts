import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { NativeStorageEditPage } from './edit/native-storage.edit.page';
import { NativeStorageListPage } from './list/native-storage.list.page';

@NgModule({
	imports: [IonicModule],
	declarations: [
		NativeStorageEditPage,
		NativeStorageListPage
	],
	entryComponents: [
		NativeStorageEditPage,
		NativeStorageListPage
	]
})
export class NativeStorageModule {

}