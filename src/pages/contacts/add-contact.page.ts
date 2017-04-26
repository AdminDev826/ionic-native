import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
	templateUrl: 'add-contact.html'
})
export class AddContactPage {
	private viewCtrl: ViewController;
	newContact: any = {};

	constructor(viewCtrl: ViewController) {
		this.viewCtrl = viewCtrl;
	}

	close() {
		this.viewCtrl.dismiss();
	}

	save() {
		this.viewCtrl.dismiss(this.newContact);
	}
}
