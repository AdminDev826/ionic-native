import { Component } from '@angular/core';
import { YoutubeVideoPlayer } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'youtube-video-player.html'
})
export class YoutubeVideoPlayerPage {
	videoId: string = 'RfI_mUIvYq8'; // Game of Thrones: The Musical – Emilia Clarke Teaser

	constructor() {
	}

	openVideo() {
		if (!isCordovaAvailable()) {
			return false;
		}
		YoutubeVideoPlayer.openVideo(this.videoId);
	}

}
