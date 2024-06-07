import { Component, OnInit } from '@angular/core';
import { Pesnamento } from '../pensamento';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {

  listaIdeias: Pesnamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
