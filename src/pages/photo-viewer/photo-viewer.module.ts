import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { PhotoViewerPage } from './photo-viewer.page';

@NgModule({
	imports: [IonicModule],
	declarations: [PhotoViewerPage],
	entryComponents: [PhotoViewerPage]
})
export class PhotoViewerModule {

}