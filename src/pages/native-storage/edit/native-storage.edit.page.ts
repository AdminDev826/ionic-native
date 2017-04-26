import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { NativeStorageItem } from '../models/native-storage-item.model';

@Component({
	templateUrl: 'native-storage.edit.html'
})
export class NativeStorageEditPage {
	private viewCtrl: ViewController;
	public item: NativeStorageItem;

	constructor(viewCtrl: ViewController, params: NavParams) {
		this.viewCtrl = viewCtrl;
		this.item = params.data.id ? params.data : new NativeStorageItem();
	}

	close() {
		this.viewCtrl.dismiss();
	}

	save() {
		this.viewCtrl.dismiss(this.item);
	}
}
