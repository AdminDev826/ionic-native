import { Component, OnInit } from '@angular/core';
import { Device } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'device.html'
})
export class DevicePage implements OnInit {
	device: any;

	constructor() {
	}

	ngOnInit() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.device = Device;
	}
}
