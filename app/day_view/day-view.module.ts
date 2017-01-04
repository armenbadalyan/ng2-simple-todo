import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';
import { DayViewComponent } from './day-view.component';
import { DayViewRoutingModule } from './day-view.routing.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		DayViewRoutingModule		
	],
	declarations: [DayViewComponent],
	
})
export class DayViewModule { }