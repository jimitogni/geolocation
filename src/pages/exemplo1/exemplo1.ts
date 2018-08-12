import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-exemplo1',
  templateUrl: 'exemplo1.html',
})
export class Exemplo1Page {
  imoveis: Array<Imovel>;

  constructor() { }

  ionViewDidLoad() {
    this.getImoveis();
  }

  getImoveis() {
    this.imoveis = [
      new Imovel('Etec Sede', 500.000, 'Avenida Barata Ribeiro', '410', 'Vila Prudente de Moraes', 'Itu', 'SP'),
      new Imovel('Regente Feijó', 152.074, 'Rua dos Andradas', '412', 'Centro', 'Itu', 'SP'),
      new Imovel('Minha casa', 999.999, 'Rua Itapeva', '106', 'Jardim Cidade 1', 'Salto', 'SP')];
  }}

export class Imovel {
  nome: string;
  valor: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string
  mapa: string;

  constructor(nome: string, valor: number, logradouro: string, numero: string, bairro: string, cidade: string, estado: string) {
    this.nome = nome;
    this.valor = valor;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.mapa = this.getMapa();
  }

  private getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyCxqgKqZMHNzOV2TETOwjRJAUpuh3aeK1c'
  }
}
