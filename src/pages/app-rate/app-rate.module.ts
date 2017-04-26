import { IonicModule, Platform } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { AppRate } from 'ionic-native';
import { Config } from '../../config';


@NgModule({
	imports: [IonicModule]
})

export class AppRateModule {
	platform: Platform;

	constructor(platform: Platform) {
		this.platform = platform;
		this.platform.ready().then(() => {
			if ((<any>window).AppRate) {
				AppRate.promptForRating(false);
			}
		});

		// if ((<any>window).cordova) {
		// 	this.init()
		// }
	}

	init() {
		AppRate.preferences.callbacks = {
			onButtonClicked: (buttonIndex) => {
				if (buttonIndex === 1) {
					console.log('onButtonClicked -> Rate It Now');
				} else if (buttonIndex === 2) {
					console.log('onButtonClicked -> Remind Me Later');
				} else if (buttonIndex === 3) {
					console.log('onButtonClicked -> No, Thanks');
				}
			}
		}

		AppRate.preferences.storeAppURL = {
			ios: Config.iosUrl,
			android: Config.androidUrl
		};

		AppRate.preferences.usesUntilPrompt = Config.usesUntilRatePrompt;
		AppRate.preferences.promptAgainForEachNewVersion = true;
	}
}
