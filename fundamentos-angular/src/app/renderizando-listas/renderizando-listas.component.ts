import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  imports: [NgFor,NgClass],
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "celular XL", descricao: "...", esgotado:false },
    { id: 2, nome: "celular XXL", descricao: "...", esgotado:false },
    { id: 3, nome: "celular XXXL", descricao: "...", esgotado:true }
  ];
}
