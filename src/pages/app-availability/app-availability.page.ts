import { Component } from '@angular/core';
import { AppAvailability } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'app-availability.html'
})
export class AppAvailabilityPage {
	package: string;

	constructor(platform: Platform) {
		this.package = platform.is('ios') ? 'twitter://' : 'com.twitter.android';
	}

	checkApp() {
		if (!isCordovaAvailable()) {
			return false;
		}
		AppAvailability.check(this.package)
			.then(
				(bool: boolean) => alert(`${this.package} is available`),
				(bool: boolean) => alert(`${this.package} is not available`),
			);
	}
}
