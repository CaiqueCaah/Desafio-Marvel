import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService){}

  ngOnInit(): void {

    debugger;
    this.heroService.getHero().subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
