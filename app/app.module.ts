import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DayViewComponent } from './day_view/day.view.component';
import { TaskDetailsComponent } from './task_details/task.details.component';
import { AppRoutingModule} from './app.routing.module';
import { RouterModule } from '@angular/router';
import { ToDoService } from './model/todo.service';
import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		MaterialModule.forRoot(),
		AppRoutingModule
	],
	declarations: [AppComponent, DayViewComponent, TaskDetailsComponent],
	providers: [ToDoService],
	bootstrap: [AppComponent]
})
export class AppModule { }
