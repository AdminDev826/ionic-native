import { Component } from '@angular/core';
import { CallNumber } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'call-number.html'
})
export class CallNumberPage {
	number: string;

	constructor() {
	}

	callNumber() {
		if (!isCordovaAvailable()) {
			return false;
		}
		CallNumber.callNumber(this.number, true)
			.then(() => console.log('Launched dialer!'));
	}
}
