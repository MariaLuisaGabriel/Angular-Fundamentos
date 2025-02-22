import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = "";
  senha = "";

  constructor(private auth: AuthService, private router: Router) { }

  login():void{
    if(this.auth.login(this.email,this.senha)){
      this.router.navigate(["/pagina-protegida"]);
      return;
    }

    alert("login inválido");
    this.senha = "";
    this.email = "";
  }
}
