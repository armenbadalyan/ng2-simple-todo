import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppPage } from '../layout/app.page';
import { AppPageService } from '../layout/app.page.service';
import { ToDoService } from '../model/todo.service';
import { ToDo } from '../model/todo';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';

@Component({
	selector: 'day-view',
	templateUrl: 'app/day_view/day-view.component.html',
	styleUrls: ['app/day_view/day-view.component.css']
})
export class DayViewComponent implements OnInit, AppPage {

	public currentDateString: string;
	public prevDateString: string;
	public nextDateString: string;
	public toDoList: ToDo[];
	public isLoading:boolean;

	/* AppPage interface impl */
	public title: BehaviorSubject<string> = new BehaviorSubject('');
	public hasBack: BehaviorSubject<boolean> = new BehaviorSubject(false);

	private dateOffset = 0;
	private dayStream: BehaviorSubject<number> = new BehaviorSubject(0);



	constructor(private toDoService: ToDoService, private router: Router, private appPageService: AppPageService) { }

	ngOnInit(): void {
		this.setDateString();

		this.dayStream
			.switchMap(offset => this.toDoService.getItemsForDay(offset)).subscribe(list => {
				this.isLoading = false;
				this.toDoList = list;
			});

		this.updateList();
		this.appPageService.notifyPageInit(this);
	}

	incrementDate(): void {
		this.dateOffset++;
		this.setDateString();
		this.updateList();
	}

	decrementDate(): void {
		this.dateOffset--;
		this.setDateString();
		this.updateList();
	}

	handleCheck(todo: ToDo): void {
		todo.completed = !todo.completed;
		this.toDoService.save(todo);
	}

	private setDateString() {
		this.currentDateString = moment().add(this.dateOffset, 'days').format('dddd, MMMM D');
		this.prevDateString = moment().add(this.dateOffset - 1, 'days').format('MMM D');
		this.nextDateString = moment().add(this.dateOffset + 1, 'days').format('MMM D');
		this.title.next(this.currentDateString);
	}

	private updateList() {
		this.isLoading = true;
		this.dayStream.next(this.dateOffset);
	}

}