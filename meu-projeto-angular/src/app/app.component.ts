import { Component } from '@angular/core';
import { DoceriaComponent } from './doceria/doceria.component';

@Component({
  selector: 'app-root',
  imports: [ DoceriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-projeto-angular';
}
