import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent
  ]
})
export class SearchHeroModule { }
