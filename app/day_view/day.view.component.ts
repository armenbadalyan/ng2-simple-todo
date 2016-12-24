import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from '../model/todo.service';
import { ToDo } from '../model/todo';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';

@Component({
	selector: 'day-view',
	templateUrl: 'app/day_view/day.view.component.html',
	styleUrls: ['app/day_view/day.view.component.css']
})
export class DayViewComponent implements OnInit {

	public currentDateString: string;
	public toDoList: Observable<ToDo[]>;

	private dateOffset = 0;
	private dayStream:BehaviorSubject<number> = new BehaviorSubject(0);


	constructor(private toDoService: ToDoService, private router: Router ) { }

	ngOnInit(): void {
		this.setDateString();		

		this.toDoList = this.dayStream
			.switchMap(offset => this.toDoService.getItemsForDay(offset));

		this.updateList();
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

	createItem(): void {
		let link = ['/task_details', 'new', this.dateOffset];
		this.router.navigate(link);
	}

	handleCheck(todo:ToDo): void {
		todo.completed = !todo.completed;
		this.toDoService.save(todo);
	}

	private setDateString() {
		this.currentDateString = moment().add(this.dateOffset, 'days').format('dddd, MMMM D');
	}

	private updateList() {
		this.dayStream.next(this.dateOffset);
	}

}