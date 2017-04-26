import { Injectable } from '@angular/core';
import { SqliteItem } from './models/sqlite-item.model';

const DB_NAME: string = '__ionicstorage';
const win: any = window;

@Injectable()
export class SqliteService {
	private _db: any;

	constructor() {
		if (win.sqlitePlugin) {
			this._db = win.sqlitePlugin.openDatabase({
				name: DB_NAME,
				location: 2,
				createFromLocation: 0
			});

		} else {
			console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');

			this._db = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
		}


		this.initTable();
	}

	private initTable() {
		this.query('CREATE TABLE IF NOT EXISTS items (id integer primary key, title text, teaser text)')
			.catch(err => {
				console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
			});
	}

	private query(query: string, params: any[] = []): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				this._db.transaction((tx: any) => {
						tx.executeSql(query, params,
							(tx: any, res: any) => resolve({ tx: tx, res: res }),
							(tx: any, err: any) => reject({ tx: tx, err: err }));
					},
					(err: any) => reject({ err: err }));
			} catch (err) {
				reject({ err: err });
			}
		});
	}

	public select(): Promise<SqliteItem[]> {
		let query = 'SELECT id, title, teaser FROM items';
		return this.query(query)
			.then(data => {
				let items: SqliteItem[] = [];
				for (let i = 0; i < data.res.rows.length; i++) {
					var row = data.res.rows.item(i);
					items.push(row);
				}
				return items;
			});
	}

	public addItem(item: SqliteItem) {
		let query = 'INSERT INTO items (title, teaser) VALUES (?, ?)';
		return this.query(query, [item.title, item.teaser]).then(data => {
			item.id = data.res.insertId;
			return item;
		});
	}

	public deleteItem(id: string) {
		let query = 'DELETE FROM items WHERE id = ?';
		return this.query(query, [id]);
	}

	public updateItem(item: SqliteItem) {
		let query = 'UPDATE items SET title = ?, teaser = ? WHERE id = ?';
		return this.query(query, [item.title, item.teaser, item.id]);
	}
}