import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultsHeroes } from '../model/response/hero-response';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent{

  form: FormGroup;
  hero: any;
  image: string = '';

  constructor(private heroService: HeroService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
    });
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  getHeroByName(name: string): void {
    this.heroService.getHeroByName(name).subscribe({
      next: response => {
        this.hero = response.data.results[0];
        this.image = this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  searchHero(): void {
    const name: string = this.form.controls['name'].value;
    debugger;
    this.getHeroByName(name);
  }

}
