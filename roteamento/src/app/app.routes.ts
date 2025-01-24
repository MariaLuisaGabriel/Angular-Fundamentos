import { Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PagNaoEncontradaComponent } from './pag-nao-encontrada/pag-nao-encontrada.component';
import { PagcparametrosComponent } from './pagcparametros/pagcparametros.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [ 
    //no angular 19, é o loadComponent que dita quais arquivos são carregados quando as páginas
    // são redirecionadas (lazy-loading!)
    //loadChildren > loadComponent
    //loadchildren: carrega uma rede de componentes
    //loadcomponent: carrega um único componente
    {
        path: "primeira-pagina",
        loadComponent: () => import('../app/primeira-pagina/primeira-pagina.component')
            .then(m => m.PrimeiraPaginaComponent)
    },
    {
        path: "segunda-pagina",
        loadComponent: () => import('../app/segunda-pagina/segunda-pagina.component')
            .then(m => m.SegundaPaginaComponent)
    },
    {
        path: "pagina-protegida",
        loadComponent: () => import('../app/pagina-protegida/pagina-protegida.component')
            .then(m => m.PaginaProtegidaComponent),
        canActivate: [authGuard]//proteção da página
    },
    {
        path: "login",
        loadComponent: () => import('../app/login/login.component')
            .then(m => m.LoginComponent)
    },
    {path: "", redirectTo: "login", pathMatch: "full"}, 
    //^^^^ já abre a página principal redirecionada para a primeira página!
    {path: "pagcparametros/:id", component: PagcparametrosComponent},
    // /:id quer dizer que a variável id receberá o valor de um parâmetro
    {path: "**", component: PagNaoEncontradaComponent},//pagina nao encontrada!
    //o path "**" simboliza qualquer path que a gente tentar redirecionar a página que não
    //existe na lista de paths!
];
