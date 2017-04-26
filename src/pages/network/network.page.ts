import { Component } from '@angular/core';
import { Network } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'network.html'
})
export class NetworkPage {
	status: string;
	networkConnection: string

	constructor() {
		if (isCordovaAvailable()) {
			if (Network.type && Network.type !== 'none') {
				this.status = 'connected';
				this.networkConnection = Network.type;
			} else {
				this.status = 'disconnected';
				this.networkConnection = 'no network connection';
			}
			this.watchDisconnect();
			this.watchConnect();
		}
	}

	watchDisconnect() {
		Network.onDisconnect().subscribe(() => {
			this.status = 'disconnected';
			setTimeout(() => {
				this.networkConnection = Network.type;
			}, 3000);
		});
	}

	watchConnect() {
		Network.onConnect().subscribe(() => {
			this.status = 'connected';

			setTimeout(() => {
				this.networkConnection = Network.type;
				if (Network.type && Network.type !== 'none') {
					alert(`we got a '${Network.type}' connection!`);
				}
			}, 3000);
		});
	}
}
