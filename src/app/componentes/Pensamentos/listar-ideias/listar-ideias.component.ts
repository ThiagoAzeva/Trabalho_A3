import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento';
import { DadosIdeiasService } from 'src/app/services/dados-ideias.service';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {


  listaIdeias: Pensamento[] = [];

  constructor(private service:  DadosIdeiasService  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaIdeias = listaPensamentos
    })
  }

}
