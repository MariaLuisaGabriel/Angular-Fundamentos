import { Routes } from '@angular/router';
//paths que o app pode seguir
export const routes: Routes = [
    {//nested lazy-loading
        path: "produtos", loadChildren: () => import('../app/produtos/produtos-routing.module')
            .then(m => m.ProdutosRoutingModule)
    },
    {//nested lazy-loading
        path: "carrinho", loadChildren: () => import('../app/carrinho/carrinho.module')
            .then(m => m.CarrinhoModule)
    },
    {
        path: "", redirectTo:"produtos", pathMatch:"full"
    },
    {
        path: "**", loadComponent: () => import('../app/pagina-nao-encontrada/pagina-nao-encontrada.component')
        .then(m => m.PaginaNaoEncontradaComponent)
    }
];
