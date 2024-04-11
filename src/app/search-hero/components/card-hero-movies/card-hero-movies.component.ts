import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-hero-movies',
  templateUrl: './card-hero-movies.component.html',
  styleUrls: ['./card-hero-movies.component.css']
})
export class CardHeroMoviesComponent {
  @Input() dataCardInput: any;
}
