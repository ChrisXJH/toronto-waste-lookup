import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  data$: Observable<any>;
  isLoading$: Observable<any>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.data$ = this.store.pipe(
      select(fromStore.getWasteLookupEntitiesSelector)
    );
    this.isLoading$ = this.store.pipe(
      select(fromStore.getWasteLookupIsLoadingSelector)
    );
  }
}
