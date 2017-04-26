import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Config, cloudSettings } from '../config';
import { ActionsheetModule } from '../pages/actionsheet/actionsheet.module';
import { AppAvailabilityModule } from '../pages/app-availability/app-availability.module';
import { BadgeModule } from '../pages/badge/badge.module';
import { BarcodeScannerModule } from '../pages/barcode-scanner/barcode-scanner.module';
import { BrightnessModule } from '../pages/brightness/brightness.module';
import { CalendarModule } from '../pages/calendar/calendar.module';
import { CallNumberModule } from '../pages/call-number/call-number.module';
import { CameraModule } from '../pages/camera/camera.module';
import { ClipboardModule } from '../pages/clipboard/clipboard.module';
import { ContactsModule } from '../pages/contacts/contacts.module';
import { CropModule } from '../pages/crop/crop.module';
import { DatePickerModule } from '../pages/date-picker/date-picker.module';
import { DeviceModule } from '../pages/device/device.module';
import { DeviceMotionModule } from '../pages/device-motion/device-motion.module';
import { DialogsModule } from '../pages/dialogs/dialogs.module';
import { FlashlightModule } from '../pages/flashlight/flashlight.module';
import { HomeModule } from '../pages/home/home.module';
import { LocalNotificationsModule } from '../pages/local-notifications/local-notifications.module';
import { NativeStorageModule } from '../pages/native-storage/native-storage.module';
import { NetworkModule } from '../pages/network/network.module';
import { PhotoViewerModule } from '../pages/photo-viewer/photo-viewer.module';
import { PositionModule } from '../pages/position/position.module';
import { ScreenOrientationModule } from '../pages/screen-orientation/screen-orientation.module';
import { ShakeModule } from '../pages/shake/shake.module';
import { SimModule } from '../pages/sim/sim.module';
import { SocialSharingModule } from '../pages/social-sharing/social-sharing.module';
import { SpinnerDialogModule } from '../pages/spinner-dialog/spinner-dialog.module';
import { SqliteModule } from '../pages/sqlite/sqlite.module';
import { TextToSpeechModule } from '../pages/text-to-speech/text-to-speech.module';
import { ToastsModule } from '../pages/toasts/toasts.module';
import { VibrateModule } from '../pages/vibrate/vibrate.module';
import { YoutubeVideoPlayerModule } from '../pages/youtube-video-player/youtube-video-player.module';
import { LaunchNavigatorModule } from '../pages/launch-navigator/launch-navigator.module';
import { AppRateModule } from '../pages/app-rate/app-rate.module';
import { StreamingMediaModule } from '../pages/streaming-media/streaming-media.module';
import { ThemeableBrowserModule } from '../pages/themeable-browser/themeable-browser.module';
import { InsomniaModule } from '../pages/insomnia/insomnia.module';
import { CloudModule } from '@ionic/cloud-angular';
import { PushModule } from '../pages/push/push.module';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthService } from "../providers/auth-service";
import { RegisterPageModule } from "../pages/register/register.module";

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		IonicModule.forRoot(MyApp),
		CloudModule.forRoot(cloudSettings),

		ActionsheetModule,
		AppAvailabilityModule,
		BadgeModule,
		BarcodeScannerModule,
		BrightnessModule,
		CalendarModule,
		CallNumberModule,
		CameraModule,
		ClipboardModule,
		ContactsModule,
		CropModule,
		DatePickerModule,
		DeviceModule,
		DeviceMotionModule,
		DialogsModule,
		FlashlightModule,
		HomeModule,
		LocalNotificationsModule,
		NativeStorageModule,
		NetworkModule,
		PhotoViewerModule,
		PositionModule,
		PushModule,
		ScreenOrientationModule,
		ShakeModule,
		SimModule,
		SocialSharingModule,
		SpinnerDialogModule,
		SqliteModule,
		TextToSpeechModule,
		ToastsModule,
		VibrateModule,
		YoutubeVideoPlayerModule,
		LaunchNavigatorModule,
		AppRateModule,
		StreamingMediaModule,
		ThemeableBrowserModule,
		InsomniaModule,
		LoginPageModule,
		RegisterPageModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		Storage,
		Config,
		AuthService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {
}
