import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'header-bar',
	templateUrl: 'app/layout/header.component.html',
	styleUrls: ['app/layout/header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input()
	public title:string = '';

	@Input('has-back')
	public hasBack:boolean;

	ngOnInit():void {}

	close():void {
		window.history.back();
	}
} 