import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosIdeiasService {

  constructor(private http: HttpClient) { }


}
