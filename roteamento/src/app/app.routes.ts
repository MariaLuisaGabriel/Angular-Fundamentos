import { Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PagNaoEncontradaComponent } from './pag-nao-encontrada/pag-nao-encontrada.component';
import { PagcparametrosComponent } from './pagcparametros/pagcparametros.component';

export const routes: Routes = [
    {path: "primeira-pagina", component: PrimeiraPaginaComponent},
    {path: "segunda-pagina", component: SegundaPaginaComponent},
    {path: "", redirectTo: "primeira-pagina", pathMatch: "full"}, 
    //^^^^ já abre a página principal redirecionada para a primeira página!
    {path: "pagcparametros/:id", component: PagcparametrosComponent},
    // /:id quer dizer que a variável id receberá o valor de um parâmetro
    {path: "**", component: PagNaoEncontradaComponent},//pagina nao encontrada!
    //o path "**" simboliza qualquer path que a gente tentar redirecionar a página que não
    //existe na lista de paths!
];
