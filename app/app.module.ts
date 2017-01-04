import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { DayViewModule } from './day_view/day-view.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { TaskDetailsComponent } from './task_details/task-details.component';
import { AppRoutingModule} from './app.routing.module';
import { RouterModule } from '@angular/router';
import { AppPageService } from './layout/app.page.service';
import { ToDoService } from './model/todo.service';
import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		MaterialModule.forRoot(),
		DayViewModule,
		AppRoutingModule
	],
	declarations: [AppComponent, LayoutComponent, HeaderComponent, TaskDetailsComponent],
	providers: [ToDoService, AppPageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
