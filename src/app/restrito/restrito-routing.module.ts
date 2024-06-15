import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { LoginComponent } from '../login/login.component';
import { RestritoComponent } from '../restrito/restrito.component';
import { ListaProdutoComponent } from '../restrito/lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from '../restrito/cadastro-produto/cadastro-produto.component'
import { MenuRestritoComponent } from './menu-restrito/menu-restrito.component';
import { AtualizaProdutoComponent } from '../restrito/atualiza-produto/atualiza-produto.component';
const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'login', component: LoginComponent},
{path: 'restrito',component: RestritoComponent},
{ path: 'restrito/lista', component: ListaProdutoComponent },
{ path: 'restrito/cadastro', component: CadastroProdutoComponent },
{ path: 'restrito/atualiza',component: AtualizaProdutoComponent},
{ path: 'restrito/menu', component: MenuRestritoComponent },
{path: '', redirectTo: '/inicio', pathMatch:'full'}
]
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RestritoRoutingModule { }
