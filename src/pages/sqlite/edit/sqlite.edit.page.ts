import { Component } from '@angular/core';

import { ViewController, NavParams } from 'ionic-angular';
import { SqliteItem } from '../models/sqlite-item.model';

@Component({
	templateUrl: 'sqlite.edit.html'
})
export class SqliteEditPage {
	private viewCtrl: ViewController;
	public item: SqliteItem;

	constructor(viewCtrl: ViewController, params: NavParams) {
		this.viewCtrl = viewCtrl;
		this.item = params.data.id ? params.data : new SqliteItem();
	}

	close() {
		this.viewCtrl.dismiss();
	}

	save() {
		this.viewCtrl.dismiss(this.item);
	}
}
