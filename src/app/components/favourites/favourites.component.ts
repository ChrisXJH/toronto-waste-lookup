import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites$: Observable<any>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.favourites$ = this.store.pipe(
      select(fromStore.getFavouritesEntitiesSelector)
    );
  }
}
