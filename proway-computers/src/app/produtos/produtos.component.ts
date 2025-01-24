import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { IProduto, produtos } from './produtos';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-produtos',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: IProduto[] = produtos;
}
