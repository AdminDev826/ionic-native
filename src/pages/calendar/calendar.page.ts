import { Component } from '@angular/core';
import { Calendar } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	templateUrl: 'calendar.html'
})
export class CalendarPage {
	eventTitle: string;
	eventLocation: string;
	eventNotes: string;
	calendarName: string;
	startDate: any;
	endDate: any;
	showDate: any;

	constructor() {
	}

	createCalendar() {
		if (!isCordovaAvailable()) {
			return false;
		}
		Calendar.createCalendar(this.calendarName).then(
			msg => alert('Done'),
			err => alert(err)
		);
	};

	openCalendar() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let date = new Date(this.showDate);
		Calendar.openCalendar(date);
	}

	createEvent() {
		if (!isCordovaAvailable()) {
			return false;
		}
		let start = new Date(this.startDate);
		let end = new Date(this.endDate);
		Calendar.createEvent(this.eventTitle, this.eventLocation, this.eventNotes, start, end)
			.then(() => alert('Done'), err => alert('Error'));
	}
}
