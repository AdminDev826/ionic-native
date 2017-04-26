import { Injectable } from '@angular/core';
import { Push } from '@ionic/cloud-angular';
import { Config } from '../../config';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PushSenderService {
	private pushUrl = 'https://api.ionic.io/push/notifications';

	constructor(
		private push: Push,
		private config: Config,
		private http: Http
	) {
	}

	send(message) {
		let token = this.push.token;
		let data = {
			'tokens': [token.token],
			'profile': this.config.ionicSecurityProfile,
			'notification': {
				'ios': {
					'title': 'test push',
					'message': message
				},
				'android': {
					'title': 'test push',
					'message': message
				}
			}
		};
		let headers = new Headers({
			'Authorization': 'Bearer ' + this.config.ionicCloudApiToken,
			'Content-Type': 'application/json'
		});
		let options = new RequestOptions({ headers: headers });
		this.http.post(this.pushUrl, data, options)
			.subscribe(x => console.log(x));
	}
}