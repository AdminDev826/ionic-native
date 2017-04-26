import { Component } from '@angular/core';
import { SocialSharing } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'social-sharing.html'
})
export class SocialSharingPage {
	emailSubject: string;
	emailMassage: string;
	emails: string;
	facebookSubject: string;
	facebookMassage: string;
	facebookImage: any;
	instagramImage: any;

	constructor() {
		this.facebookImage = 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg';
		this.instagramImage = 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg';
	}

	shareViaEmail() {
		if (!isCordovaAvailable()) {
			return false;
		}
		SocialSharing.canShareViaEmail().then(
			() => {
				SocialSharing.shareViaEmail(this.emailMassage, this.emailSubject, [this.emails]);
			},
			reason => alert(reason)
		);
	}

	shareViaFacebook() {
		if (!isCordovaAvailable()) {
			return false;
		}
		SocialSharing.shareViaFacebook(this.facebookMassage, this.facebookImage, 'https://www.facebook.com/');
	}
}
