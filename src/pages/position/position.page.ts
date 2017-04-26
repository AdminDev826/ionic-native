import { Component } from '@angular/core';
import { IPositionParameter } from './position-parameter.model';
import { PositionService } from './position.service';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'position.html',
	providers: [PositionService]
})
export class PositionPage {
	items: IPositionParameter[] = [];

	private service: PositionService;

	constructor(service: PositionService) {
		this.service = service;
		this.items = [];
		if (isCordovaAvailable()) {
			this.startWatching();
		}
	}

	private startWatching() {
		this.service.watchPosition()
			.subscribe(items => {
				this.items = items;
			});
	}
}
