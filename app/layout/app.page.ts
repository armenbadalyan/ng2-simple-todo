import { Observable } from 'rxjs/Observable';

export interface AppPage {
	title: Observable<string>;
  hasBack: Observable<boolean>
}