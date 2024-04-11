import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { HeroResponse } from '../components/model/response/hero-response';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<HeroResponse> {
    const time = Date.now();
    const publicKey = '986225d4a3e50077bc7e1047e9068cc3';
    const privateKey = '9dcbd8e34a54c19fe4499020e98a46659975b0b8'

    const hash = Md5.hashStr(time.toString() + privateKey + publicKey);
    return this.http.get<HeroResponse>(`https://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`);
  }

  getHeroByName(name: string): Observable<HeroResponse> {
    const time = Date.now();
    const publicKey = '986225d4a3e50077bc7e1047e9068cc3';
    const privateKey = '9dcbd8e34a54c19fe4499020e98a46659975b0b8'

    const hash = Md5.hashStr(time.toString() + privateKey + publicKey);
    return this.http.get<HeroResponse>(`https://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&name=${name}`);
  }
}
