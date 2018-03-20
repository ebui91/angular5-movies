import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
