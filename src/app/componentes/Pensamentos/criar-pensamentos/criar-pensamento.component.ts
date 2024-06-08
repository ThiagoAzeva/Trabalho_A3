import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento';
import { DadosIdeiasService } from 'src/app/services/dados-ideias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: DadosIdeiasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-ideias'])
    })
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

}
