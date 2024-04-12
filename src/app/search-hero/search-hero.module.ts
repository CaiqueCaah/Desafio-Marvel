import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroSearchComponent } from './components/hero-search';
import { CardHeroComponent } from './components/card-hero';
import { CardHeroMoviesComponent } from './components/card-hero-movies';
import { LoadingComponent } from './components/loading';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroRoutingModule } from './seach-hero-rounting.module';

@NgModule({
  declarations: [
    HeroComponent,
    HeroSearchComponent,
    CardHeroComponent,
    CardHeroMoviesComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HeroRoutingModule
  ],
  exports: [
    HeroComponent,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class SearchHeroModule { }
