import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { RenderizandoListasComponent } from "./renderizando-listas/renderizando-listas.component";
import { ComponentePersonalizadoComponent } from "./componente-personalizado/componente-personalizado.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";
import { Servico1Component } from "./servico1/servico1.component";
import { Servico2Component } from "./servico2/servico2.component";
import { CicloDeVidaComponent } from "./ciclo-de-vida/ciclo-de-vida.component";
import { CicloDeVidaPaiComponent } from "./ciclo-de-vida-pai/ciclo-de-vida-pai.component";
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, PrimeiroComponenteComponent, SegundoComponenteComponent, TwoWayBindingComponent, RenderizandoListasComponent, ComponentePersonalizadoComponent, ComponentePaiComponent, Servico1Component, Servico2Component, CicloDeVidaPaiComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-angular';
}
