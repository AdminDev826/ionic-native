import { Component } from '@angular/core';
import { ActionSheet } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'actionsheet.html'
})
export class ActionsheetPage {
	buttonPressed: any;

	constructor() {
	}

	showActionsheet() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
		ActionSheet.show({
			'title': 'What do you want with this image?',
			'buttonLabels': buttonLabels,
			'addCancelButtonWithLabel': 'Cancel',
			'addDestructiveButtonWithLabel': 'Delete'
		}).then((buttonIndex: number) => {
			switch (buttonIndex) {
				case 1:
					this.buttonPressed = 'Delete button'
					break;
				case 2:
					this.buttonPressed = 'Share via Facebook button'
					break;
				case 3:
					this.buttonPressed = 'Share via Twitter button'
					break;
				default:
					this.buttonPressed = 'Cancel button'
			}
		});
	}
}
