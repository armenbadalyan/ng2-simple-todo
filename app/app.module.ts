import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { DayViewModule } from './day_view/day-view.module';
import { TaskDetailsModule } from './task_details/task-details.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { AppRoutingModule} from './app.routing.module';
import { RouterModule } from '@angular/router';
import { AppPageService } from './layout/app.page.service';
import { ToDoService } from './model/todo.service';
import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,		
		MaterialModule.forRoot(),
		DayViewModule,
		TaskDetailsModule,
		AppRoutingModule
	],
	declarations: [AppComponent, LayoutComponent, HeaderComponent],
	providers: [ToDoService, AppPageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
