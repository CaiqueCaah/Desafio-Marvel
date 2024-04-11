import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../../service/hero.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  form: FormGroup;
  hero: any;
  image: string;
  comics: any;
  movies: any;
  loading: boolean = false;
  messageError: string = '';

  constructor(private heroService: HeroService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.createForm();
  }

  createForm(): void {
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
    this.loading = true;
    this.heroService.getHeroByName(name).subscribe({
      next: response => {
        if(response.data.results.length > 0){
          this.hero = response.data.results[0];
          this.image = this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
          this.getHeroComics(this.hero.id);
          this.getHeroMovies(this.hero.id);
        } else{
          this.messageError = 'Não foi possivel encontrar o Heroi informado';
          this.snackBar.open(this.messageError, "Erro", { duration: 4000 });
          debugger
        }
      },
      error: () => {
        this.messageError = 'Não foi possivel encontrar o Heroi informado';
        this.loading = false;
        this.snackBar.open(this.messageError, "Erro", { duration: 4000 });
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  searchHero(): void {
    this.hero = null;
    this.image = '';

    const name: string = this.form.controls['name'].value;
    this.getHeroByName(name);
  }

  getHeroComics(id: number): void {
    this.heroService.getComics(id).subscribe({
      next: response => {
        this.comics = response.data;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  getHeroMovies(id: number): void {
    this.heroService.getMovies(id).subscribe({
      next: response => {
        this.movies = response.data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
