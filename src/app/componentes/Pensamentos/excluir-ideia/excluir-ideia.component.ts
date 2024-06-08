import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento';
import { DadosIdeiasService } from 'src/app/services/dados-ideias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-ideia',
  templateUrl: './excluir-ideia.component.html',
  styleUrls: ['./excluir-ideia.component.css']
})
export class ExcluirIdeiaComponent implements OnInit {
  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: DadosIdeiasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idString: string | null = this.route.snapshot.paramMap.get("id");
    const id: number = idString ? parseInt(idString) : 0;

    this.service.buscarPorId(id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if(this.pensamento && this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-ideias'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-ideias'])
  }

}
