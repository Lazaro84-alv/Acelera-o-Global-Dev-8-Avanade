import { ChangeDetectionStrategy, Component } from '@angular/core'; 
import { Band } from './band';
import { Service } from './service';
import { catchError } from 'rxjs/operators';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'RXJS';
  bands$ = this.service.getBandWithSyles$;

  constructor(private service: Service) {}
}
