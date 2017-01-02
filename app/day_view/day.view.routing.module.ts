import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayViewComponent }   	from './day.view.component';


const routes: Routes = [  
  { path: 'day_view',  component: DayViewComponent },
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DayViewRoutingModule {}