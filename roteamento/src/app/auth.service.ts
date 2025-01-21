import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  constructor() { }

  isAuth():boolean{
    return !!sessionStorage.getItem("access-token");//!! converte para booleano
  }

  login(email:string, senha:string):boolean{
    if( email==="a@gmail.com" && senha==="123") {
      sessionStorage.setItem("access-token",this.accesstoken);
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.clear();
  }
}
