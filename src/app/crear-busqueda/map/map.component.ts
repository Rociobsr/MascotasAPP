import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { GmapService } from './../../services/gmap.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElementRef: ElementRef;
  googleMaps: any;
  lat: number;
  long: number;
  positionData: any[]; // Declarar positionData para almacenar la información de la posición

  constructor(
    private maps: GmapService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.printCurrentPosition();
  }

  async printCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = coordinates.coords;

      this.lat = latitude;
      this.long = longitude;

      console.log('Latitude:', this.lat);
      console.log('Longitude:', this.long);

      this.loadMap();

    } catch (error) {
      console.error('Error al obtener la posición:', error);
    }
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.maps.loadGoogleMaps();
      const mapEl = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: { lat: this.lat, lng: this.long },
        disableDefaultUI: true,
        zoom: 10,
      });
      const source_position = new googleMaps.LatLng(this.lat, this.long);
      map.setCenter(source_position);
      this.renderer.addClass(mapEl, 'visible');
    } catch (e) {
      console.log(e);
    }
  }}