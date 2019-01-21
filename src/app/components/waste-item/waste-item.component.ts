import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-waste-item',
  templateUrl: './waste-item.component.html',
  styleUrls: ['./waste-item.component.css']
})
export class WasteItemComponent implements OnInit {
  @Input() item: any = {};

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {}

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
