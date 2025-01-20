import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, PrimeiroComponenteComponent,SegundoComponenteComponent,TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
