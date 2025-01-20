import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico1',
  imports: [FormsModule],
  templateUrl: './servico1.component.html',
  styleUrl: './servico1.component.css'
})
export class Servico1Component {
  nome = '';

  constructor(private logger: LoggerService){

  }

  adicionarnome(){
    //alert(this.nome);
    this.logger.logar(this.nome);
  }
}
