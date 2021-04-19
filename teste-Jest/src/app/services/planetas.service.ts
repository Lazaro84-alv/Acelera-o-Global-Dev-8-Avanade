import { Injectable } from '@angular/core';
import { IPlanetasService } from './planetas.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService implements IPlanentasService {

  private url = 'https://planetas-api.vercel.app/api/planetas';

  constructor(private http: HttpClient) { }

  getPlanetas() {
      return this.http.get<PlanetaModel[]>(this.url, { observe: 'response' });
  }
}
