import { Component } from '@angular/core';
import { Sim } from 'ionic-native';

@Component({
	templateUrl: 'sim.html'
})
export class SimPage {
	carrierName: string;
	countryCode: string;
	mcc: number;
	mnc: number;

	constructor() {
		this.getSimInfo();
	}

	getSimInfo() {
		Sim.getSimInfo().then(
			(info) => {
				this.carrierName = info.carrierName
				this.countryCode = info.countryCode
				this.mcc = info.mcc
				this.mnc = info.mnc
			},
			(err) => alert('Unable to get sim info: ' + err)
		);
	}
}
