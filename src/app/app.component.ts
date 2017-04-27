import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, App, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home.page';
import { SqliteListPage } from '../pages/sqlite/list/sqlite.list.page';
import { NetworkPage } from '../pages/network/network.page';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner.page';
import { ToastsPage } from '../pages/toasts/toasts.page';
import { VibratePage } from '../pages/vibrate/vibrate.page';
import { SpinnerDialogPage } from '../pages/spinner-dialog/spinner-dialog.page';
import { FlashlightPage } from '../pages/flashlight/flashlight.page';
import { SocialSharingPage } from '../pages/social-sharing/social-sharing.page';
import { ActionsheetPage } from '../pages/actionsheet/actionsheet.page';
import { SimPage } from '../pages/sim/sim.page';
import { BrightnessPage } from '../pages/brightness/brightness.page';
import { CallNumberPage } from '../pages/call-number/call-number.page';
import { CameraPage } from '../pages/camera/camera.page';
import { CropPage } from '../pages/crop/crop.page';
import { ScreenOrientationPage } from '../pages/screen-orientation/screen-orientation.page';
import { PhotoViewerPage } from '../pages/photo-viewer/photo-viewer.page';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications.page';
import { DeviceMotionPage } from '../pages/device-motion/device-motion.page';
import { CalendarPage } from '../pages/calendar/calendar.page';
import { DialogsPage } from '../pages/dialogs/dialogs.page';
import { NativeStorageListPage } from '../pages/native-storage/list/native-storage.list.page';
import { BadgePage } from '../pages/badge/badge.page';
import { ClipboardPage } from '../pages/clipboard/clipboard.page';
import { ContactsPage } from '../pages/contacts/contacts.page';
import { DevicePage } from '../pages/device/device.page';
import { AppAvailabilityPage } from '../pages/app-availability/app-availability.page';
import { ShakePage } from '../pages/shake/shake.page';
import { DatePickerPage } from '../pages/date-picker/date-picker.page';
import { YoutubeVideoPlayerPage } from '../pages/youtube-video-player/youtube-video-player.page';
import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech.page';
import { PushPage } from '../pages/push/push.page';
import { LaunchNavigatorPage } from '../pages/launch-navigator/launch-navigator.page';
import { PositionPage } from '../pages/position/position.page';
import { StreamingMediaPage } from '../pages/streaming-media/streaming-media.page';
import { ThemeableBrowserPage } from '../pages/themeable-browser/themeable-browser.page';
import { InsomniaPage } from '../pages/insomnia/insomnia.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from "../pages/register/register.page";


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	wide: boolean = false;
	genericPages;
	nativePages;
	thirdpartyPages;
	paymentsPages;
	cssComponentsPages;
	homePage;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(platform: Platform, menu: MenuController, app: App, private modal: ModalController) {

		this.menu = menu;
		// set up our app
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.homePage = { title: 'Home', component: HomePage, icon: 'home' };

		this.nativePages = [
			{ title: 'Action sheet', component: ActionsheetPage, icon: 'list-box' },
			{ title: 'App availability', component: AppAvailabilityPage, icon: 'apps' },
			{ title: 'Badge', component: BadgePage, icon: 'ionic' },
			{ title: 'BarcodeScanner', component: BarcodeScannerPage, icon: 'qr-scanner' },
			{ title: 'Brightness', component: BrightnessPage, icon: 'sunny' },
			{ title: 'Calendar', component: CalendarPage, icon: 'calendar' },
			{ title: 'Call number', component: CallNumberPage, icon: 'call' },
			{ title: 'Camera', component: CameraPage, icon: 'camera' },
			{ title: 'Clipboard', component: ClipboardPage, icon: 'clipboard' },
			{ title: 'Contacts', component: ContactsPage, icon: 'contacts' },
			{ title: 'Crop', component: CropPage, icon: 'crop' },
			{ title: 'Date picker', component: DatePickerPage, icon: 'calendar' },
			{ title: 'Device', component: DevicePage, icon: 'logo-android' },
			{ title: 'Device motion', component: DeviceMotionPage, icon: 'contract' },
			{ title: 'Dialogs', component: DialogsPage, icon: 'alert' },
			{ title: 'Flashlight', component: FlashlightPage, icon: 'flash' },
			{ title: 'Launch navigator', component: LaunchNavigatorPage, icon: 'pin' },
			{ title: 'Local notifications', component: LocalNotificationsPage, icon: 'notifications' },
			{ title: 'Native storage', component: NativeStorageListPage, icon: 'cloud' },
			{ title: 'Network', component: NetworkPage, icon: 'wifi' },
			{ title: 'Photo viewer', component: PhotoViewerPage, icon: 'images' },
			{ title: 'Position', component: PositionPage, icon: 'compass' },
			{ title: 'Push', component: PushPage, icon: 'notifications' },
			{ title: 'Screen orientation', component: ScreenOrientationPage, icon: 'expand' },
			{ title: 'Shake', component: ShakePage, icon: 'hand' },
			{ title: 'Sim', component: SimPage, icon: 'information-circle' },
			{ title: 'SocialSharing', component: SocialSharingPage, icon: 'share' },
			{ title: 'SpinnerDialog', component: SpinnerDialogPage, icon: 'sync' },
			{ title: 'SQLite', component: SqliteListPage, icon: 'cube' },
			{ title: 'Text to speech', component: TextToSpeechPage, icon: 'microphone' },
			{ title: 'Toasts', component: ToastsPage, icon: 'information-circle' },
			{ title: 'Vibrate', component: VibratePage, icon: 'phone-portrait' },
			{ title: 'Youtube player', component: YoutubeVideoPlayerPage, icon: 'logo-youtube' },
			{ title: 'Streaming media', component: StreamingMediaPage, icon: 'logo-playstation' },
			{ title: 'Themeable browser', component: ThemeableBrowserPage, icon: 'color-palette' },
			{ title: 'Insomnia', component: InsomniaPage, icon: 'moon' },
			{ title: 'Registration', component: RegisterPage, icon: 'key' }
		];

		// this.rootPage = HomePage;
		this.rootPage = LoginPage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			StatusBar.styleDefault();

			setTimeout(() => {
				navigator.splashscreen.hide()
			}, 100);
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		let component = page.component;
		if(page.title == 'Registration'){
			let modal = this.modal.create(component);
			modal.onDidDismiss(item => {
				if (!item) {
					return;
				}
			});
			modal.present();
		}else{
			this.nav.setRoot(component);
		}
	}

	setWidth() {
		if (this.platform.width() > 767) {
			this.wide = true;
			this.menu.open();
		} else {
			this.wide = false;
			this.menu.close();
		}
	};

	listenToEvents() {
		window.addEventListener('resize', () => {
			this.setWidth();
		});
	}
}
