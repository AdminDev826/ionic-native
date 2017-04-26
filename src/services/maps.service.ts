import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class MapsService {
	private platform: Platform;

	constructor(platform: Platform) {
		this.platform = platform;
	}

	public openMapsApp(location: any) {
		let q;
		if (this.platform.is('android')) {
			q = 'geo:' + location + '?q=' + location;
		} else {
			q = 'maps://maps.apple.com/?q=' + location;
		}
		q = q.replace(' ', '');
		window.location.href = q;
	}
}
