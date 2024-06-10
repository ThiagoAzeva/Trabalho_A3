import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { DadosIdeiasService } from 'src/app/services/dados-ideias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-ideia',
  templateUrl: './editar-ideia.component.html',
  styleUrls: ['./editar-ideia.component.css']
})
export class EditarIdeiaComponent implements OnInit {
  pensamento: Pensamento = {
    id: '1',
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(private service: DadosIdeiasService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idString: string | null = this.route.snapshot.paramMap.get("id");
    const id: number = idString ? parseInt(idString) : 0;

    this.service.buscarPorId(id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
  editarPensamento() {
    if(this.pensamento && this.pensamento.id) {
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listar-ideias'])
      })
    }
  }
cancelar(){
  this.router.navigate(['/listar-ideias'])
}

}
