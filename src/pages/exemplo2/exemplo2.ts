import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

declare var google;


@IonicPage()
@Component({
  selector: 'page-exemplo2',
  templateUrl: 'exemplo2.html',
})
export class Exemplo2Page {
  map: any;

  constructor() { }

  ionViewDidLoad() {
    const position = new google.maps.LatLng(-23.267587, -47.296101);

    //criar em sala
    const mapOptions = {
      zoom: 18,
      center: position,
      disableDefaultUI: true
    }

    //criar em sala
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //criar em sala
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,

      //Titulo
      //title: 'Minha posição',

      //Animção
      animation: google.maps.Animation.BOUNCE, // BOUNCE

      //Icone
      //icon: 'assets/imgs/pessoa.png'
    });
  }
}
