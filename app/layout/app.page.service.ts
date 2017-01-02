import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { AppPage } from './app.page';

@Injectable()
export class AppPageService {
  // Observable string sources
  private pageInitializedSource = new Subject<AppPage>();
  
  // Observable string streams
  pageInitialized = this.pageInitializedSource.asObservable();

  // Service message commands
  notifyPageInit(page: AppPage) {
    this.pageInitializedSource.next(page);
  }

}