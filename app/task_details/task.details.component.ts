import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppPage } from '../layout/app.page';
import { AppPageService } from '../layout/app.page.service';

import { ToDoService } from '../model/todo.service';
import { ToDo } from '../model/todo';
import * as moment from 'moment';

@Component({
	selector: 'task_details',
	templateUrl: 'app/task_details/task.details.component.html',
	styleUrls: ['app/task_details/task.details.component.css']
})
export class TaskDetailsComponent implements OnInit, AppPage {

	public viewState: string;
	public toDoForm: FormGroup;
	public isNewItem: boolean;
	public toDo:ToDo;	

	/* AppPage interface impl */
	public title:BehaviorSubject<string> = new BehaviorSubject('');
	public hasBack:BehaviorSubject<boolean> = new BehaviorSubject(true);

	constructor(private toDoService: ToDoService, private route: ActivatedRoute, private appPageService: AppPageService, private fb: FormBuilder) { }

	ngOnInit(): void {

		this.toDoForm = this.fb.group({
			description: ['', Validators.required],
			date: ['', Validators.required],
			time: ['', Validators.required]
		});

		this.route.params
			.subscribe((params: Params) => this.initState(params));

		this.appPageService.notifyPageInit(this);

	}

	createItem(formData:any):void {
		// ugly, ugly check
		if (formData && this.toDoForm.valid) {
			console.dir(formData);
			this.toDo = new ToDo('tempId', formData.description, moment(formData.date+' '+formData.time).toDate(), false);
			this.toDoService.create(this.toDo).then(()=>this.close());
		}		
	}	

	private initState(params: Params) {

		this.viewState = params['state'];
		if (this.viewState === 'new') {			
			this.toDoForm.setValue({
				description: '',
				date: moment().format('YYYY-MM-DD'),
				time: ''
			});
			this.title.next('Create new item')
		}
		else {
			// TODO: get item from the server
		}
		this.isNewItem = this.viewState  === 'new';
	}

}