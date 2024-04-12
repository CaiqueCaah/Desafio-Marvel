import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHeroModule } from './search-hero';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeroRoutingModule } from './search-hero/seach-hero-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchHeroModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeroRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
