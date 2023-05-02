import { Component } from '@angular/core';
import { PokeF } from './PokeF';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  id: number  = 1;
  img: string = "001";
  
  pokemonF : PokeF = {
    "imagem" : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  } as PokeF;

  proximo(){
    this.id++;
    if(this.id < 10){
      this.img = "00"+this.id;
    }else if(this.id < 100){
      this.img = "0"+this.id;
    }else if(this.id < 1009){
      this.img = this.id.toString();
    }else{
      this.id = 1;
      this.img = "00"+this.id;
    }
    this.pokemonF.imagem="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.img+".png"
  }

  anterior(){
    this.id--;
    if(this.id < 1){
      this.id = 1008;
      this.img = this.id.toString();
    }else if(this.id < 10){
      this.img = "00"+this.id;
    }else if(this.id < 100){
      this.img = "0"+this.id;
    }else if(this.id < 1009){
      this.img = this.id.toString();
    }
    this.pokemonF.imagem="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.img+".png"
  }
}
