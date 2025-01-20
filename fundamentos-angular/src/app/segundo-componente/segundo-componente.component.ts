
import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-segundo-componente',
  imports: [UpperCasePipe,DatePipe],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = 'João';
  datanascimento = '1995-01-01';
}
