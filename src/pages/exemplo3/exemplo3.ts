import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

//criar em sala
declare var google;

@IonicPage()
@Component({
  selector: 'page-exemplo3',
  templateUrl: 'exemplo3.html',
})
export class Exemplo3Page {
  map: any;//criar em sala

  //criar em sala
  constructor(private geolocation: Geolocation) { }

  //criar em sala
  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }
}