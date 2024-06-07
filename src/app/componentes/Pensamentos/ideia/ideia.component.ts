import { Component, OnInit,Input } from '@angular/core';
import { Pesnamento } from '../pensamento';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {
@Input() ideia: Pesnamento = {
  id: 0,
  conteudo: 'amo angular',
  autoria: 'dev',
  modelo:'modelo3',
}
  constructor() { }

  ngOnInit(): void {
  }

larguraIdeia(): string{
 if (this.ideia.conteudo.length > 256){
   return 'pensamento-g';

 }
return 'pensamento-p';
}

}
