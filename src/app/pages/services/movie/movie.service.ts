import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environmenteTMDB as env } from 'src/environments/environment.tbdm';
import { Observable } from 'rxjs';
import { ResultGeneros } from 'src/app/shared/models/genero/genero.model';
import { ResultMovies } from 'src/app/shared/models/movie/movie.model';
import { Language } from 'src/app/shared/models/language/language.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private header = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) {}

  getGeneros(): Observable<ResultGeneros | null> {
    const params = new HttpParams().appendAll({
      api_key: env.authToken,
      language: 'pt-BR',
    });

    return this.httpClient.get<ResultGeneros>(
      env.baseUrl + 'genre/movie/list',
      { headers: this.header, params: params }
    );
  }

  getLanguages(): Observable<Language[] | null> {
    const params = new HttpParams().appendAll({
      api_key: env.authToken,
    });

    return this.httpClient.get<Language[]>(
      env.baseUrl + 'configuration/languages',
      { headers: this.header, params: params }
    );
  }

  getMoviesByGenre(
    idGenero: string,
    page: number,
    language: string,
    order: string
  ): Observable<ResultMovies | null> {
    const params = new HttpParams().appendAll({
      api_key: env.authToken,
      language: language,
      sort_by: order,
      include_adult: false,
      include_video: false,
      page: page,
      with_genres: idGenero,
      with_watch_monetization_types: 'flatrate',
    });

    return this.httpClient.get<ResultMovies>(env.baseUrl + 'discover/movie', {
      headers: this.header,
      params: params,
    });
  }
}
