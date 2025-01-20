import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico2',
  imports: [FormsModule],
  templateUrl: './servico2.component.html',
  styleUrl: './servico2.component.css'
})
export class Servico2Component {
  produto = "";

  constructor(public logger: LoggerService){}

  adicionarproduto(){
    //console.log(`nome:${this.produto}`)
    this.logger.logar(this.produto);
  }
}
