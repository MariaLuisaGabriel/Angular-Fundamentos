/*

PÁGINA QUE RECEBE PARÂMETROS DE ROTA E DE BUSCA

*/


import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagcparametros',
  imports: [NgIf],
  templateUrl: './pagcparametros.component.html',
  styleUrl: './pagcparametros.component.css'
})
export class PagcparametrosComponent implements OnInit{
  id: number | null = null;//rota
  idade: number | null = null;//busca
  nome: string | null = null;//busca

  constructor(private route: ActivatedRoute){}//avisa que haverá roteamento com dados passados

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    }) // map de parametros para igualá-los com o id da rota

    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    }) // map de parametros para igualá-los com o id da rota
  }
}

//se escrever na rota: http://localhost:4200/pagcparametros/5, o id será 5 e aparecerá na tela
//se escrever na rota: http://localhost:4200/pagcparametros/5?nome=joao&idade=12, a página receberá
//os 3 parâmetros: id = 5, nome = joao e idade = 12
