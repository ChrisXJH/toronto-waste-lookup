import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Unsubscribable } from 'rxjs';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService implements OnDestroy {
  private backendUrl: string;
  private favourites: any[] = [];
  private subscription: Unsubscribable;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private httpClient: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  getFavourites() {
    return this.favourites;
  }

  addToFavourites(item: any) {
    this.favourites.push(item);
  }

  removeFromFavourites(targetItem: any) {
    this.favourites = this.favourites.filter(
      item => item.title !== targetItem.title
    );
  }

  isFavourite(targetItem: any) {
    return this.favourites.some(item => item.title === targetItem.title);
  }

  searchWaste(filter: string) {
    return Observable.create(observer => {
      if (!filter || filter === '') {
        observer.next([]);
        observer.complete();
      } else {
        this.subscription = this.getData()
          .pipe(
            map((data: any[]) =>
              data.filter(
                item =>
                  item.keywords &&
                  item.keywords
                    .split(', ')
                    .some(keyword => keyword.match(new RegExp(filter, 'g')))
              )
            )
          )
          .subscribe(data => {
            observer.next(data);
            observer.complete();
          });
      }
    });
  }

  getData() {
    return this.httpGet(this.backendUrl).pipe(
      map((items: any) => {
        items.map(item => {
          item.isFavourite = this.isFavourite(item);
          return item;
        });
        return items;
      })
    );
  }

  private httpGet(target: string) {
    return this.httpClient.get(target);
  }
}
