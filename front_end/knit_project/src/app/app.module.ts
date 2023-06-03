import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnitListComponent } from './knit-list/knit-list.component';
import { KnitInputSearchComponent } from './knit-input-search/knit-input-search.component';
import { BorderCardDirective } from './border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    KnitListComponent,
    KnitInputSearchComponent,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
