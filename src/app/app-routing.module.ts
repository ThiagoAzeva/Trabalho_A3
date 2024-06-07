import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/Pensamentos/criar-pensamentos/criar-pensamento.component';
import { ListarIdeiasComponent } from './componentes/Pensamentos/listar-ideias/listar-ideias.component';

const routes: Routes = [
  { path: 'criar-ideia', component: CriarPensamentoComponent },
  { path: 'listar-ideias', component: ListarIdeiasComponent },
  { path: '', redirectTo: '/listar-ideias', pathMatch: 'full' },
  { path: '**', redirectTo: '/listar-ideias' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
