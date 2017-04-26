import { Injectable } from '@angular/core';
import { CloudSettings } from '@ionic/cloud-angular';

@Injectable()
export class Config {
	public ionicSecurityProfile = 'test';
	public ionicCloudApiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NGFjN2ZjMS1iNzAyLTRmOWMtOTFmOS0zZGE0YjA3MGJkNzcifQ.XiQkjfLm9U3Irnab6uQqgSXZ9Ilrt1LQfUTETJfLvbA';
	static videoUrl = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
	static audioUrl = 'http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3';
	static sender_id = '211377410430';
	static app_id = 'f7f7ef47';
	// Apprate - Application URLs
	static iosUrl = 'com.titaniumtemplates.barebone-ionic';
	static androidUrl = 'market://details?id=com.titaniumtemplates.barebone-ionic';
	static usesUntilRatePrompt = 3;
}

export const cloudSettings: CloudSettings = {
	'core': {
		'app_id': Config.app_id,
	},
	'push': {
		'sender_id': Config.sender_id
	}
};
