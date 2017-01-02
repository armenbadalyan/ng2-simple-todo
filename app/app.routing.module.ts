import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task_details/task.details.component';

const routes: Routes = [
  { path: 'task_details/:state/:dateOffset',  component: TaskDetailsComponent },  
  { path: '', redirectTo: '/day_view', pathMatch: 'full' },
  { path: '**', redirectTo: '/day_view' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}