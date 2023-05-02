import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeD } from './pokedex/PokeD';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<PokeD>{
    return this.http.get<PokeD>("https://pokeapi.co/api/v2/pokemon/"+id+"/");
  }
}
