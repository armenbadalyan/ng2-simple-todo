import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ToDoService } from '../model/todo.service';
import { ToDo } from '../model/todo';
import * as moment from 'moment';

@Component({
	selector: 'task_details',
	templateUrl: 'app/task_details/task.details.component.html',
	styleUrls: ['app/task_details/task.details.component.css']
})
export class TaskDetailsComponent implements OnInit {

	public viewState: string;
	public isNewItem: boolean;
	public toDo:ToDo;
	public date:string;
	public time:string;

	constructor(private toDoService: ToDoService, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params
			.subscribe((params: Params) => this.initState(params));

	}

	createItem():void {
		this.toDo.dueDate = moment(this.date+' '+this.time).toDate();
		this.toDoService.create(this.toDo).then(()=>this.close());
	}

	close():void {
		window.history.back();
	}

	private initState(params: Params) {

		this.viewState = params['state'];
		if (this.viewState === 'new') {
			this.toDo = new ToDo('tempId', '', new Date(), false);
			this.date = moment(this.toDo.dueDate).format('mm/dd/yyyy');			
		}
		else {
			// TODO: get item from the server
		}
		this.isNewItem = this.viewState  === 'new';
	}

}