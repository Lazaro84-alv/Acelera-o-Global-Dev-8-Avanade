import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { PlanetasService } from './services/planetas.service';
import { createMock } from '@testing-library/angular/jest-utils';
import { of } from 'rxjs';
import { planetasMock } from './services/mock/planetas.mock';
import { BrowserModule } from '@angular/platform-browser';


describe('AppComponent', () => {
  const planetasService = createMock(PlanetasService);
  planetasService.getPlanetas = jest.fn().mockReturnValue(of({
    body: planetasMock,
  }));


  it('deve renderizar o componente', async () => {  
    await render(AppComponent, {
      providers: [
        {
          provide: PlanetasService,
          useValue: planetasService,
        },
      ]
    });
  });

  it('deve exibir o título da página', async () => {
    await render(AppComponent, {
       providers: [
        {
          provide: PlanetasService,
          useValue: planetasService
        },
      ]
     });
     screen.getByText('Planetas');
  }); 
});
