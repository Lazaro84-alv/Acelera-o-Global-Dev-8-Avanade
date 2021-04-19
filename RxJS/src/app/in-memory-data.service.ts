import { Injectable } from '@angular/core';
import { InMemoryDbService } from '@angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return {
      styles: [
        { id: 1, name: 'Expansão da Consciência' },
        { id: 2, name: 'Dub' },
        { id: 3, name: 'Reggae' },
        { id: 4, name: 'Samba clássico' },
        { id: 5, name: 'Forró raiz' }
      ],
      bands: [
        { id: 1, name: 'Chama Crescente', styleId: 1 },
        { id: 2, name: 'BNegão & Seletores de Frequência', styleId: 1 },       
        { id: 3, name: 'BaianaSystem', styleId: 2 },
        { id: 4, name: 'Dub Ataque', styleId: 2 },
        { id: 5, name: 'Ponto de Equilibrio', styleId: 3 },
        { id: 6, name: 'Sattivus', styleId: 3 },
        { id: 7, name: 'Planta e Raiz', styleId: 3 },
        { id: 8, name: 'Paulinho da Viola', styleId: 4 },
        { id: 9, name: 'Cartola', styleId: 4 },
        { id: 10, name: 'Elza Soares', styleId: 4 },
        { id: 11, name: 'Jovelina Pérola Negra', styleId: 1 },
        { id: 12, name: 'Dominguinhos', styleId: 5 },
        { id: 13, name: 'Santana', styleId: 5 },
        { id: 14, name: 'Forró Santana', styleId: 5 },
        { id: 15, name: 'Banda Cultivo', styleId: 1 },
      ]
    }
  }

  constructor() { }
}
