# Ionic Natives
This project is a generic Ionic 2 application that demonstrates native functionalities.

## Dependecies, Run and Build

### Install Ionic CLI 2.x
To build and run this app you need to have Ionic CLI beta installed

```bash
$ sudo npm install -g ionic
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g {ionic version}
```

eg:
```bash
$ sudo npm install -g ionic@1.7.14
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Install plugins and platforms from package.json
Run `ionic state restore` to install all Cordova plugins and platforms included in the package.json.

### Run the app
Use `ionic serve -l` to run the app in browser and watch for changes in code

or

use `ionic serve` to just run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform
```bash
$ ionic platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic platform add ios
$ ionic platform add android
```

### Build the app
```bash
$ ionic build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic emulate ios
```

Android:
```bash
$ ionic emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:
```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-inappbrowser** - Provides a web browser view. It could be used to open images, access web pages, and open PDF files(https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git).
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-network-information** - This plugin provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
* **phonegap-plugin-barcodescanner** - This plugin opens a camera view and automagically scans a barcode, returning the data back.
* **cordova-plugin-x-toast** - This plugin allows you to show a native Toast on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
* **cordova-plugin-vibration** - This plugin provides a way to vibrate the device.
* **cordova-plugin-spinner-dialog** - A waiting dialog / progress dialog plugin with spinner for Android, iOS and Windows Phone 8.
* **cordova-plugin-flashlight** - This plugin allows you to switch the flashlight / torch of the device on and off.
* **cordova-plugin-x-socialsharing** - This plugin allows you to use the native sharing window of your mobile device.
* **cordova-plugin-actionsheet** - Show a sheet of options the user can choose from.
* **cordova-plugin-sim** - This is a cordova plugin to get data from the SIM card like the carrier name, mcc, mnc and country code and other system dependent additional info.
* **cordova-plugin-brightness** - This plugin provides a simple way to interact with the brightness of your device for iOS and Android.
* **call-number** - Call a number directly from your cordova application (https://github.com/Rohfosho/CordovaCallNumberPlugin.git).
* **cordova-plugin-crop** - Crop an image in a Cordova app.
* **cordova-plugin-camera** - This plugin provides an API for taking pictures and for choosing images from the system's image library.
* **cordova-plugin-screen-orientation** - Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, WP8 and Blackberry 10.
* **com-sarriaroman-photoviewer** - This plugin is intended to show a picture from an URL into a Photo Viewer with zoom features.
* **de.appplant.cordova.plugin.local-notification** - The purpose of this plugin is to enable an application to inform its users that it has something for them when the application isn’t running in the foreground.
* **cordova-plugin-device-motion** - This plugin provides access to the device's accelerometer.
* **cordova-plugin-calendar** - This plugin allows you to add events to the Calendar of the mobile device.
* **cordova-plugin-dialogs** - This plugin provides access to some native dialog UI elements via a global object.
* **cordova-plugin-nativestorage** - This plugin enables native storage of variables in Android, iOS and Windows.
* **cordova-plugin-badge** - The essential purpose of badge numbers is to enable an application to inform its users that it has something for them when the application isn’t running in the foreground.
* **com.verso.cordova.clipboard** - Clipboard management plugin for Cordova/PhoneGap that supports iOS, Android, and Windows Phone 8 (https://github.com/VersoSolutions/CordovaClipboard.git).
* **cordova-plugin-contacts** - This plugin provides access to the device contacts database.
* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-appavailability** - This plugin allows you to check if an app is installed on the user's device.
* **cordova-plugin-shake** - Detect when a physical device performs a shake gesture.
* **cordova-plugin-datepicker** - Show a native date or time picker widget.
* **cordova-plugin-tts** - Enables you to access the devices Text to Speech services.
* **uk.co.workingedge.phonegap.plugin.launchnavigator** - This Cordova/Phonegap plugin can be used to navigate to a destination by launching native navigation apps on Android and iOS (https://github.com/dpa99c/phonegap-launch-navigator.git).
* **com.bunkerpalace.cordova.YoutubeVideoPlayer** - Play Youtube Videos in a native Video Player on Android & iOS (https://github.com/Glitchbone/CordovaYoutubeVideoPlayer.git).
* **cordova-plugin-themeablebrowse** - The purpose of this plugin is to provide an in-app-browser that can also be configured to match the theme of your app.
* **cordova-plugin-insomnia** - Prevent the screen of the mobile device from falling asleep (https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git).
* **phonegap-plugin-push** - This plugin offers support to receive and handle native push notifications with a single unified API, and with no dependency on any other plugins.
* **cordova-plugin-apprate** - This plugin provide the rate this app functionality into your Cordova/Phonegap application.
* **cordova-plugin-streaming-media** - This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
* **cordova-plugin-email-composer** - The plugin provides access to the standard interface that manages the editing and sending an email message.

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `1d0d1b64`

## Documentation
* [Ionic 2 Natives Quick Start Guide](https://docs.google.com/document/d/1qol3rel_KP8lgkSqMrXMlvpvWdP-Al1OBnL4Br-Vm4k/edit?usp=sharing)

## Changelog
```
1.0 - February 24, 2017
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)
* [Ionic 2.0](http://ionic.io/2)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
