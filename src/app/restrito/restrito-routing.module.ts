import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from '../restrito/restrito.component';
import { ListaProdutoComponent } from '../restrito/lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from '../restrito/cadastro-produto/cadastro-produto.component'
import { MenuRestritoComponent } from './menu-restrito/menu-restrito.component';
import { AtualizaProdutoComponent } from '../restrito/atualiza-produto/atualiza-produto.component';
import { GuardGuard } from '../guard.guard';
const routes: Routes = [
{path: 'restrito',component: RestritoComponent},
{ path: 'restrito/lista', component: ListaProdutoComponent, canActivate:[GuardGuard] },
{ path: 'restrito/cadastro', component: CadastroProdutoComponent,  canActivate:[GuardGuard] },
{ path: 'restrito/atualiza/:id',component: AtualizaProdutoComponent,  canActivate:[GuardGuard]},
{ path: 'restrito/menu', component: MenuRestritoComponent },
{path: '', redirectTo: '/inicio', pathMatch:'full'}
]
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RestritoRoutingModule { }
