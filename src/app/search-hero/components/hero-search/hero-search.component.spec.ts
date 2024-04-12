import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../../service/hero.service';
import { CardHeroComponent } from '../card-hero';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HeroResponse, ResultsHeroes } from '../model/response/hero-response';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let heroService: HeroService;
  let formBuilder: FormBuilder;
  let matSnackBar: MatSnackBar;

  const mockResultsHeroesResponse: ResultsHeroes = {
    id: 12345,
    name: 'hulk',
    description: 'teste',
    resourceURI: 'teste',
    modified: new Date,
    urls: [
      {
        type: 'teste',
        url: 'teste'
      }
    ],
    thumbnail: {
      path: 'path',
      extension: 'jpg'
    },
    comics: {
      available: 12345,
      returned: 12345,
      collectionURI: 'teste',
      items: [
        {
          resourceURI: 'teste',
          name: 'teste'
        }
      ]
    },
    stories: {
      available: 12345,
      returned: 12345,
      collectionURI: 'teste',
      items: [
        {
          resourceURI: 'teste',
          name: 'teste',
          type: 'teste'
        }
      ]
    },
    events: {
      available: 12345,
      returned: 12345,
      collectionURI: 'teste',
      items: [
        {
          resourceURI: 'teste',
          name: 'teste'
        }
      ]
    },
    series: {
      available: 12345,
      returned: 12345,
      collectionURI: 'teste',
      items: [
        {
          resourceURI: 'teste',
          name: 'teste'
        }
      ]
    }
  }

  const mockResponse: HeroResponse = {
    code: 200,
    status: 'OK',
    copyright: 'Copyright',
    attributionText: 'Attribution Text',
    attributionHTML: '<p>Attribution HTML</p>',
    data: {
      offset: 0,
      limit: 10,
      total: 100,
      count: 10,
      results: [
        mockResultsHeroesResponse
      ]
    },
    etag: 'abcdef123456'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent, CardHeroComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        FormBuilder,
        {
          provider: HeroService, useValue: heroService
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService);
    matSnackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hero by name', () => {
    spyOn(heroService, 'getHeroByName').and.returnValue(of(mockResponse));

    component.getHeroByName('Hulk');

    expect(component.hero).toEqual(mockResponse.data.results[0]);
    expect(component.image).toEqual('path.jpg');
  });

  it('should handle error when getting hero by name', () => {
    const errorResponse = { message: 'Erro ao buscar o herói' };
    spyOn(heroService, 'getHeroByName').and.returnValue(throwError(errorResponse));

    component.getHeroByName('Hero1');

    expect(component.hero).toBe(null);
    expect(component.loading).toBeFalse();
  });

  it('should search hero', () => {
    spyOn(heroService, 'getHeroByName').and.returnValue(of(mockResponse));

    component.form.controls['name'].setValue('hulk');

    component.searchHero();

    expect(component.hero.name).toBe('hulk');
  });

  it('should get hero comics', () => {
    spyOn(heroService, 'getComics').and.returnValue(of(mockResponse));

    component.getHeroComics(1);

    expect(component.comics.results[0].name).toBe('hulk');
  });

  it('should get hero movies', () => {
    const movies = ['Movie1', 'Movie2'];
    spyOn(heroService, 'getMovies').and.returnValue(of(mockResponse));

    component.getHeroMovies(1);

    expect(component.movies.results[0].name).toBe('hulk');
  });
});
