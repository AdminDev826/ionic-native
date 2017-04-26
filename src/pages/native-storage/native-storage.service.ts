import { Injectable } from '@angular/core';
import { NativeStorageItem } from './models/native-storage-item.model';
import { uuid } from '../../services/uuid';
import { NativeStorage } from 'ionic-native';

@Injectable()
export class NativeStorageService {
	private key = 'native-storage-items-key';

	public getItems(): Promise<NativeStorageItem[]> {
		return NativeStorage.getItem(this.key)
			.then(null, () => this.saveItems([]));
	}

	public addItem(item: NativeStorageItem): Promise<any> {
		item.id = uuid();
		return this.getItems().then(items => {
			console.log('Add items', items);
			items.push(item);
			return this.saveItems(items);
		});
	}

	public deleteItem(id: string): Promise<any> {
		return this.getItems().then(items => {
			items = items.filter(x => x.id !== id);
			return this.saveItems(items);
		})
	}

	public updateItem(item: NativeStorageItem): Promise<any> {
		return this.getItems().then(items => {
			let storedItem = <NativeStorageItem>items.find(x => x.id === item.id);
			storedItem.title = item.title;
			storedItem.teaser = item.teaser;
			return this.saveItems(items);
		})
	}

	private saveItems(items: NativeStorageItem[]): Promise<any> {
		return NativeStorage.setItem(this.key, items);
	}

}