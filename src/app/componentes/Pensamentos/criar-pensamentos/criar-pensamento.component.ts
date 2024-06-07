import { Component, OnInit } from '@angular/core';
import { Pesnamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pesnamento = {
    id: 1,
    conteudo: 'Aprendendo angular',
    autoria: 'dev',
    modelo:'modelo1',

  }
  constructor() { }

  ngOnInit(): void {
  }
  criarPensamenmto(){
    alert('Pensamento criado com sucesso')
  }

  cancelarPensamento(){
    alert('Pensamento cancelado')
  }
}
