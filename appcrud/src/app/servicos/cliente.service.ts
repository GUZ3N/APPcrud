import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}

export class ClientePage implements OnInit {
  clientes: cliente[];
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.get<[Cliente]>(this.url);
  }

}
