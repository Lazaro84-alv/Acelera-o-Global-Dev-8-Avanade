import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlanetasService } from './planetas.service';
import { planetasMock } from './mock/planetas.mock';
import { throwError } from 'rxjs';

describe('PlanetasService', () => {
  let service: PlanetasService;
  let injector: TestBed;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }); 
    .compileComponents()
      .then(() => {
        injector = getTestBed();
        httpClient = injector.inject(HttpClient);
        service = new PlanetasService(httpClient);
      });
  });

  it('deve ser criada', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar o endpoint dos planetas', () => {
    jest.spyOn(httpClient, 'get');
    service.getPlanetas();
    expect(httpClient.get).toHaveBeenLastCalledWith('https://planetas-api.vercel.app/api/planetas', { observe: 'response' });
  });

  it('deve retornar os planetas', () => {
    jest.spyOn(httpClient, 'get').mockReturnValueOnce(of(planetasMock));

    let planetasResponse;

    service
      .getPlanetas()
      .subscribe(response => {
        planetasResponse = response;
    });

    expect(planetasResponse).toEqual(planetasMock);
  });

  it('deve retornar erro', () => {
    const error = { status: 400 };

    jest.spyOn(httpClient, 'get').mockReturnValueOnce(throwError(error));

    let planetasResponse;

    service
      .getPlanetas()
      .subscribe(() => {}, err => {
        planetasResponse = err;
    });

    expect(planetasResponse).toEqual(error);
  });
});
 