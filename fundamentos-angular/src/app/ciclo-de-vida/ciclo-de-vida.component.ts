import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ciclo-de-vida',
  imports: [DatePipe],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy{
  horario = new Date();

  timer: any = null!;

  @Input() texto = "";

  ngOnInit(): void {
    console.log('o evento Oninit disparou');
    this.timer = setInterval(() =>this.horario = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("o evento onchanges disparou com as seguintes mudanças:" + changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
