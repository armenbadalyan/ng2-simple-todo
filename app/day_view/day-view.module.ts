import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';
import { SharedModule }   from '../shared/shared.module';
import { DayViewComponent } from './day-view.component';
import { DayViewRoutingModule } from './day-view.routing.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		SharedModule,
		DayViewRoutingModule		
	],
	declarations: [DayViewComponent]
	
})
export class DayViewModule { }