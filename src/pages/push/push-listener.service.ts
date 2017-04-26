import { Injectable } from '@angular/core';
import { Push, PushToken } from '@ionic/cloud-angular';

@Injectable()
export class PushListenerService {

	constructor(push: Push) {
		push.register()
			.then((t: PushToken) => push.saveToken(t));

		push.rx.notification()
			.subscribe(this.onPush);
	}

	private onPush(msg) {
		alert(msg.title + ': ' + msg.text);
	}
}