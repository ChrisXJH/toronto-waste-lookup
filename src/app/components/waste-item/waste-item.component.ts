import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Unsubscribable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-waste-item',
  templateUrl: './waste-item.component.html',
  styleUrls: ['./waste-item.component.css']
})
export class WasteItemComponent implements OnInit, OnDestroy {
  @Input() item: any = {};
  subscription: Unsubscribable;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.subscription = this.store
      .pipe(
        select(fromStore.getFavouritesEntitiesSelector),
        tap(data => this.handleFavouritesUpdate(data))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private handleFavouritesUpdate(data) {
    if (data.newItem) {
      this.item.isFavourite = data.newItem.title === this.item.title;
    } else if (data.removedItem && data.removedItem.title === this.item.title) {
      this.item.isFavourite = false;
    }
  }

  decode(str) {
    if (str === undefined) {
      return '';
    }
    return str
      .replace(/&amp/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;'/g, `'`)
      .replace(/&;nbsp;/g, ' ');
  }

  handleFavourite() {
    if (this.item.isFavourite) {
      this.item.isFavourite = false;
      this.store.dispatch(new fromStore.RemoveFavourite(this.item));
    } else {
      this.item.isFavourite = true;
      this.store.dispatch(new fromStore.AddFavourite(this.item));
    }
  }
}
