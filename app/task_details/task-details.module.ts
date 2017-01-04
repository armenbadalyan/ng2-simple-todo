import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TaskDetailsComponent } from './task-details.component';
import { TaskDetailsRoutingModule } from './task-details.routing.module';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule,
		TaskDetailsRoutingModule		
	],
	declarations: [TaskDetailsComponent]	
})
export class TaskDetailsModule { }