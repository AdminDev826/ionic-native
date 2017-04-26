import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from 'ionic-native';
import { Config } from '../../config';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'streaming-media.html'
})
export class StreamingMediaPage {

	constructor() {
	}

	playVideo() {
		if (!isCordovaAvailable()) {
			return;
		}

		let options: StreamingVideoOptions = {
			successCallback: () => {
				console.log('Video played');
			},
			errorCallback: (e) => {
				console.log('Error streaming', e);
			},
			orientation: 'landscape'
		};
		StreamingMedia.playVideo(Config.videoUrl, options);
	}

	playAudio() {
		if (!isCordovaAvailable()) {
			return;
		}

		let options: StreamingAudioOptions = {
			bgColor: '#ffffff',
			initFullscreen: false,
			successCallback: () => {
				console.log('Audio played');
			},
			errorCallback: (e) => {
				console.log('Error streaming', e);
			}
		};

		StreamingMedia.playAudio(Config.audioUrl, options);
	}

	stopAudio() {
		if (!isCordovaAvailable()) {
			return;
		}

		StreamingMedia.stopAudio();
	}
}
