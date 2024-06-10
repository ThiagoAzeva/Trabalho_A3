import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/Pensamentos/criar-pensamentos/criar-pensamento.component';
import { ListarIdeiasComponent } from './componentes/Pensamentos/listar-ideias/listar-ideias.component';
import { IdeiaComponent } from './componentes/Pensamentos/ideia/ideia.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirIdeiaComponent } from './componentes/Pensamentos/excluir-ideia/excluir-ideia.component';
import { EditarIdeiaComponent } from './componentes/Pensamentos/editar-ideia/editar-ideia.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarIdeiasComponent,
    IdeiaComponent,
    ExcluirIdeiaComponent,
    EditarIdeiaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
