import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { isCordovaAvailable } from '../../../services/is-cordova-available';

import { NativeStorageService } from '../native-storage.service';
import { NativeStorageItem } from '../models/native-storage-item.model';
import { NativeStorageEditPage } from '../edit/native-storage.edit.page';

@Component({
	templateUrl: 'native-storage.list.html',
	providers: [NativeStorageService]
})
export class NativeStorageListPage implements OnInit {
	private service: NativeStorageService;
	private modalController: ModalController;

	public items: NativeStorageItem[];

	constructor(service: NativeStorageService, modalController: ModalController) {
		this.service = service;
		this.modalController = modalController;
	}

	ngOnInit(): void {
		this.loadItems();
	}

	addItem() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let modal = this.modalController.create(NativeStorageEditPage);
		modal.onDidDismiss(item => {
			if (!item) {
				return;
			}

			this.service.addItem(item).then(() => this.loadItems());
		});
		modal.present(modal);
	}

	private loadItems() {
		if (!isCordovaAvailable()) {
			return false;
		}
		this.service.getItems().then(items => {
			this.items = items;
		});
	}

	editItem(item) {
		let modal = this.modalController.create(NativeStorageEditPage, item);
		modal.onDidDismiss(changedItem => {
			if (!changedItem) {
				return;
			}
			this.service.updateItem(changedItem).then(() => this.loadItems());
		});
		modal.present(modal);
	}

	deleteItem(id) {
		this.service.deleteItem(id).then(() => this.loadItems());
	}
}
