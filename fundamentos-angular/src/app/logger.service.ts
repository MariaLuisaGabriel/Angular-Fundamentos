import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagem: string[] = [];

  logar(message:string){
    console.log(message);
    this.mensagem.push(message);
  }

  exibetodososlogs(){
    console.log(this.mensagem);
    alert(this.mensagem);
  }
}
