import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from '../componentes/Pensamentos/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosIdeiasService {
  private readonly API = 'http://localhost:3000/ideias'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {

  // Generate a random number for the ID
  const id = Math.floor(Math.random() * 1000000).toString();

  // Assign the ID to the pensamento
  pensamento.id = id;

  // Continue with your existing logic...

    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )

  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }


}
