import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { LineThroughDirective } from './line-through.directive'

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [LineThroughDirective],
	exports: [LineThroughDirective]
	
})
export class SharedModule { }