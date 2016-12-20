import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';

import { ToDo } from './todo';

@Injectable()
export class ToDoService {
  private toDoUrl = 'https://api.appery.io/rest/1/db/collections/ToDo';
  private dbId = '58584bcee4b02b2c07dc8db8';
  private getHeaders = new Headers({ 'X-Appery-Database-Id': this.dbId });
  private postHeaders = new Headers({ 'Content-Type': 'application/json', 'X-Appery-Database-Id': this.dbId });

  constructor(private http: Http) { }

  // get items for specific day
  getItemsForDay(dateOffset: number): Promise<ToDo[]> {
    let day = moment().add(dateOffset, 'days'),
      startOfTheDay = day.startOf('day').valueOf(),
      endOfTheDay = day.endOf('day').valueOf();

    return this.makeGet('', { "where": { "$and": [{ "dueDate": { "$gte": startOfTheDay } }, { "dueDate": { "$lt": endOfTheDay } }] } })
      .then(function(response) {
        return response.json().map(function(item: any) {
          return new ToDo(item._id, item.description, new Date(item.dueDate), item.completed);
        });
      })
      .catch(this.handleError);
  }

  // create new item
  create(item: ToDo): Promise<ToDo> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.makePost(item.serialize())
      .then(res => res.json())
      .catch(this.handleError);
  }

  // save item
  save(item: ToDo): Promise<ToDo> {
    return this.makePut(item.serialize(), item.id)
      .then(res => res.json())
      .catch(this.handleError);
  }

  private makeGet(path?: string, params?: any): Promise<any> {
    let fullUrl = this.toDoUrl,
      queryParams = new URLSearchParams();

    if (path) {
      fullUrl += '/path';
    }
    if (params) {
      Object.keys(params).forEach((key: string) => {
        queryParams.append(key, JSON.stringify(params[key]));
      });
    }

    return this.http.get(fullUrl, { headers: this.getHeaders, search: queryParams }).toPromise();
  }

  private makePost(data: Object, path?: string): Promise<any> {
    let fullUrl = this.toDoUrl;
    if (path) {
      fullUrl += '/' + path;
    }
    return this.http.post(fullUrl, JSON.stringify(data), { headers: this.postHeaders }).toPromise();
  }

  private makePut(data: Object, path?: string): Promise<any> {
    let fullUrl = this.toDoUrl;
    if (path) {
      fullUrl += '/' + path;
    }
    return this.http.put(fullUrl, JSON.stringify(data), { headers: this.postHeaders }).toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}