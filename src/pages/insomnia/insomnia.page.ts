import { Component } from '@angular/core';
import { Insomnia } from 'ionic-native';

@Component({
	templateUrl: 'insomnia.html'
})
export class InsomniaPage {

	constructor() {
	}

	ionViewWillEnter() {
		Insomnia.keepAwake()
			.then(
				() => console.log('success'),
				() => console.log('error')
			);
	}

	ionViewWillLeave() {
		Insomnia.allowSleepAgain()
			.then(
				() => console.log('success'),
				() => console.log('error')
			);
	}

}
