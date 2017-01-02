import { Component, OnInit } from '@angular/core';
import { AppPage } from '../layout/app.page';
import { AppPageService } from '../layout/app.page.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({	
	selector: 'layout',
	styleUrls: ['app/layout/layout.component.css'],
	template: `
		<header-bar [title]="title | async" [has-back]="hasBack | async"></header-bar>
		<div class="content">
			<router-outlet></router-outlet>
		</div>  
		<button md-fab class="add-button" (click)="createItem()">
    		<md-icon class="md-24">add</md-icon>
		</button> 		
	`
})
export class LayoutComponent implements OnInit {

	title: Observable<string>;
	hasBack: Observable<boolean>;

	constructor(private appPageService: AppPageService,  private router: Router) {}

	ngOnInit( ):void {
		this.title = this.appPageService.pageInitialized.switchMap((page:AppPage) => {
			return page.title;
		});

		this.hasBack = this.appPageService.pageInitialized.switchMap((page:AppPage) => {
			return page.hasBack;
		});

	}

	createItem(): void {
		let link = ['/task_details', 'new', 0];
		this.router.navigate(link);
	}
} 