import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-filho',
  imports: [FormsModule],
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent {
  @Input() sobrenome = "";
  nome = "";
  @Output() mostranome = new EventEmitter();
}
