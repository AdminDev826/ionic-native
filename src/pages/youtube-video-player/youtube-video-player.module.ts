import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { YoutubeVideoPlayerPage } from './youtube-video-player.page';

@NgModule({
	imports: [IonicModule],
	declarations: [YoutubeVideoPlayerPage],
	entryComponents: [YoutubeVideoPlayerPage]
})
export class YoutubeVideoPlayerModule {

}