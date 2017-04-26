import { Component } from '@angular/core';
import { PushSenderService } from './push-sender.service';
import { PushListenerService } from './push-listener.service';

@Component({
	templateUrl: 'push.html'
})
export class PushPage {
	message: string;

	private pushSenderService: PushSenderService;
	private pushListener: PushListenerService;

	constructor(pushSenderService: PushSenderService, pushListener: PushListenerService) {
		this.pushSenderService = pushSenderService;
		this.pushListener = pushListener;
	}

	sendMessage() {
		this.pushSenderService.send(this.message);
	}
}