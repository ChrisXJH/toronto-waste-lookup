import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultsComponent } from './components/results/results.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { WasteItemComponent } from './components/waste-item/waste-item.component';
import { HeaderComponent } from './components/header/header.component';

import { services } from './services';

import * as fromReducers from './store/reducers';
import * as fromEffects from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultsComponent,
    FavouritesComponent,
    WasteItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromReducers.reducers),
    EffectsModule.forRoot(fromEffects.effects)
  ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule {}
