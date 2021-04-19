import { Component } from '@angular/core';
import { PlanetasService } from './services/planetas.service';
import { AppComponent } from './app.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  planetas: PlanetaModel[] | null = [];
  erro = '';

  constructor(private planetasService: PlanetasService) {}

  carregarPlanetas() {
    this.planetasService
      .getPlanetas()
      .subscribe(
        response => {
          this.planetas = response.body;
        },
        error => {
          this.erro = error.message;
        }
      )
  }
}
