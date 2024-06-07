import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {

  listaIdeias = [
    {
      conteudo: 'vamo angular',
      autoria: 'asas',
      modelo: 'modelo3',
    },
    {
      conteudo: 'passa pro fio',
      autoria: 'componente pai',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: 'Jorge',
      modelo: 'modelo1',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
