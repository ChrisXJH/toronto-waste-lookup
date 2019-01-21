import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {}

  handleSubmit(event) {
    event.preventDefault();
    const inputText = event.target.querySelector('[name=input]').value;
    this.store.dispatch(new fromStore.GetWasteData(inputText));
  }

  handleTextboxUpdate(event) {
    const { value } = event.target;
    if (value === '') {
      this.store.dispatch(new fromStore.GetWasteData(''));
    }
  }
}
