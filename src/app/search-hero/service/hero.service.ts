import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHero(): Observable<any> {
    const time = Date.now();
    const publicKey = '986225d4a3e50077bc7e1047e9068cc3';
    const privateKey = '9dcbd8e34a54c19fe4499020e98a46659975b0b8';

    debugger;
    // ts=${time}&apikey=986225d4a3e50077bc7e1047e9068cc3&hash=9dcbd8e34a54c19fe4499020e98a46659975b0b8
    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters?`);
  }
}
