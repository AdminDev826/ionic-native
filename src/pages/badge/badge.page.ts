import { Component } from '@angular/core';
import { Badge } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'badge.html'
})
export class BadgePage {
	increaseBy: string;
	decreaseBy: string;
	budgeNumber: string;

	constructor() {
	}

	setBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Badge.set(parseInt(this.budgeNumber, 10)).then(response => this.budgeNumber = response);
	}

	increaseBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Badge.increase(parseInt(this.increaseBy, 10)).then(response => this.budgeNumber = response);
	}

	decreaseBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Badge.decrease(parseInt(this.decreaseBy, 10)).then(response => this.budgeNumber = response);
	}

	clearBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Badge.clear();
		this.budgeNumber = '0';
	}

	getBadge() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Badge.get().then(response => this.budgeNumber = response);
	}
}
