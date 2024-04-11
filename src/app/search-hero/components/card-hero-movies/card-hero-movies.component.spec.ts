import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeroMoviesComponent } from './card-hero-movies.component';

describe('CardHeroMoviesComponent', () => {
  let component: CardHeroMoviesComponent;
  let fixture: ComponentFixture<CardHeroMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHeroMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHeroMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
