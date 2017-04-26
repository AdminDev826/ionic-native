import { Component, OnInit } from '@angular/core';
import { ThemeableBrowser } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'themeable-browser.html'
})
export class ThemeableBrowserPage implements OnInit {
	url: string = 'http://www.appseed.io';

	ngOnInit() {
		if (!isCordovaAvailable()) {
			return false;
		}
	}

	open() {
		if (!isCordovaAvailable()) {
			return false;
		}

		let options = {
			statusbar: {
				color: '#ffffffff'
			},
			toolbar: {
				height: 44,
				color: '#FF7A05'
			},
			title: {
				color: '#003264ff',
				showPageTitle: true
			},
			closeButton: {
				wwwImage: 'assets/img/close.png',
				wwwImageDensity: 2,
				align: 'left',
				event: 'closePressed'
			},
			menu: {
				wwwImage: 'assets/img/menu.png',
				wwwImageDensity: 2,
				align: 'right',
				title: 'Test',
				cancel: 'Cancel',
				items: [
					{
						event: 'helloPressed',
						label: 'Hello World!'
					},
					{
						event: 'testPressed',
						label: 'Test!'
					}
				]
			},
			backButtonCanClose: true
		};

		let browser = new ThemeableBrowser(this.url, '_blank', options);

		browser.on('helloPressed').subscribe(x => {
			alert('Hello button pressed')
		});

		browser.on('testPressed').subscribe(x => {
			alert('Test button pressed')
		});
	}
}
