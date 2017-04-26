import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'dialogs.html'
})
export class DialogsPage {
	alertMessage: string;
	confirmMessage: string;
	promptMessage: string;
	alertTitle: string;
	confirmTitle: string;
	promptTitle: string;
	times: number;

	constructor() {
	}

	showAlert() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Dialogs.alert(this.alertMessage, this.alertTitle)
	}

	showConfirm() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Dialogs.confirm(this.confirmMessage, this.confirmTitle)
	}

	showPrompt() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Dialogs.prompt(this.promptMessage, this.promptTitle)
	}

	showBeep() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Dialogs.beep(this.times)
	}

}
