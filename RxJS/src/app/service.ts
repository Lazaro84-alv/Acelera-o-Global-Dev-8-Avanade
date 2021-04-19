import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Band } from './band';
import { Style } from './style';


@Injectable({
    providedIn: 'root'
})
export class Service {
  private stylesUrl = 'api/styles';
  private bandsUrl = 'api/bands';

  constructor(private http: HttpClient) {}

    getStyles(): Observable<Style[]> {
      return this.http.get<any>(this.stylesUrl)
        .pipe(
          tap(result => console.log('Styles: ', JSON.stringify(result))),
          map(result => result.data),
          catchError(this.handleError)
        )
    }

    getBands(): Observable<Band[]> {
      return this.http.get<any>(this.bandsUrl)
        .pipe(
          tap(result => console.log('Bands: ', JSON.stringify(result))),
          map(result => result.data),
          catchError(this.handleError)
        )
    }

  getBandWithSyles$ = combineLatest([
    this.getBands(),
    this.getStyles()
  ]).pipe(
    map(([bands, styles]) => {
      return bands.map(band => ({
        ...band,
        style: styles.find(i => band.styleId == i.id).name
        }) as Band)
    }),
    catchError(this.handleError)

  );

    private handleError(err: any): Observable<never> {
      let errorMessage: string;

      if (err.error instanceof ErrorEvent) {
        errorMessage = 'An error occurred: ${err.error.message}';
      } else {
        errorMessage = 'Backend returned code ${err.status}: ${err.body.error}';
      }

      console.error(err);

      return throwError(errorMessage);
    }
}