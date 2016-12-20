import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayViewComponent }   	from './day_view/day.view.component';
import { TaskDetailsComponent } from './task_details/task.details.component';

const routes: Routes = [
  { path: '', redirectTo: '/day_view', pathMatch: 'full' },
  { path: 'day_view',  component: DayViewComponent },
  { path: 'task_details/:state/:dateOffset',  component: TaskDetailsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}