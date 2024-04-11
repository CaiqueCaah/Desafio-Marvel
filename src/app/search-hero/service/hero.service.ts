import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { HeroResponse } from '../components/model/response/hero-response';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  time = Date.now();
  publicKey = '986225d4a3e50077bc7e1047e9068cc3';
  privateKey = '9dcbd8e34a54c19fe4499020e98a46659975b0b8'

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<HeroResponse> {
    const hash = this.createdHash();
    return this.http.get<HeroResponse>(`https://gateway.marvel.com:443/v1/public/characters?ts=${this.time}&apikey=${this.publicKey}&hash=${hash}`);
  }

  getHeroByName(name: string): Observable<HeroResponse> {
    const hash = this.createdHash();
    return this.http.get<HeroResponse>(`https://gateway.marvel.com:443/v1/public/characters?ts=${this.time}&apikey=${this.publicKey}&hash=${hash}&name=${name}`);
  }

  getComics(id: number): Observable<HeroResponse> {
    const hash = this.createdHash();
    return this.http.get<HeroResponse>(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${this.time}&apikey=${this.publicKey}&hash=${hash}`);
  }

  getMovies(id: number): Observable<HeroResponse> {
    const hash = this.createdHash();
    return this.http.get<HeroResponse>(`https://gateway.marvel.com:443/v1/public/series?characters=${id}&ts=${this.time}&apikey=${this.publicKey}&hash=${hash}`);
  }

  createdHash(): string {
    return Md5.hashStr(this.time.toString() + this.privateKey + this.publicKey);
  }
}
