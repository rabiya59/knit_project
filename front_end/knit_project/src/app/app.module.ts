import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnitListComponent } from './knit-list/knit-list.component';
import { KnitInputSearchComponent } from './knit-input-search/knit-input-search.component';
import { BorderCardDirective } from './border-card.directive';
import { SearchKnitComponent } from './search-knit/search-knit.component';

@NgModule({
  declarations: [
    AppComponent,
    KnitListComponent,
    KnitInputSearchComponent,
    BorderCardDirective,
    SearchKnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
