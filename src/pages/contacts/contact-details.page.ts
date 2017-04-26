import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Contact } from 'ionic-native';
// import { Contact } from './contact';
// import { Contacts } from 'ionic-native';

@Component({
	templateUrl: 'contact-details.html'
})
export class ContactDetailsPage {
	contact: Contact;

	constructor(navParams: NavParams) {
		this.contact = <Contact>navParams.get('contact');
		console.log(this.contact);
	}
}
