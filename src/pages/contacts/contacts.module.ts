import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ContactsPage } from './contacts.page';
import { ContactDetailsPage } from './contact-details.page';
import { AddContactPage } from './add-contact.page';

@NgModule({
	imports: [IonicModule],
	declarations: [ContactsPage, ContactDetailsPage, AddContactPage],
	entryComponents: [ContactsPage, ContactDetailsPage, AddContactPage]
})
export class ContactsModule {

}