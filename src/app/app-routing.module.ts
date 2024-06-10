import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/Pensamentos/criar-pensamentos/criar-pensamento.component';
import { ListarIdeiasComponent } from './componentes/Pensamentos/listar-ideias/listar-ideias.component';
import { ExcluirIdeiaComponent } from './componentes/Pensamentos/excluir-ideia/excluir-ideia.component';
import { EditarIdeiaComponent } from './componentes/Pensamentos/editar-ideia/editar-ideia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-ideias',
    pathMatch: 'full'
  },
  {
    path: 'criar-ideia',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-ideias',
    component: ListarIdeiasComponent
  },
  {
    path: 'Pensamentos/excluir-ideia/:id',
    component: ExcluirIdeiaComponent
  },
  {
    path: 'Pensamentos/editar-ideia/:id',
    component: EditarIdeiaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
