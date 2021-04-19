import { HttpResponse } from @angular/common/http;
import { Observable } from rxjs;

export interface PlanetaModel {
  nome: string;
  posicao: number;
  diametro: number;
  tipo: 'rochoso' | 'gasoso';
}

export interface IPlanetasService {
  getPlanetas(): Observable<HttpResponse<PlanetaModel[]>>;
}
