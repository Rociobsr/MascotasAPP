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
  dest: any = { lat: 28.5167287, lng: 77.3187642 };
  directionsService: any;
  directionsDisplay: any;

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

      this.directionsService = new googleMaps.DirectionsService;
      this.directionsDisplay = new googleMaps.DirectionsRenderer;
      this.directionsDisplay = new googleMaps.DirectionsRenderer();

      const sourceIconUrl = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=O|FFFF00|000000';
      const destinationIconUrl = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=D|FF0000|000000';

      const source_position = new googleMaps.LatLng(this.lat, this.long);
      const destination_position = new googleMaps.LatLng(this.dest.lat, this.dest.lng);

      
      const source_icon = {
        url: sourceIconUrl,
        scaledSize: new googleMaps.Size(30, 40), // scaled size
        origin: new googleMaps.Point(0, 0), // origin
        anchor: new googleMaps.Point(0, 0) // anchor
      };
      const destination_icon = {
        url: destinationIconUrl,
        scaledSize: new googleMaps.Size(30, 40), // scaled size
        origin: new googleMaps.Point(0, 0), // origin
        anchor: new googleMaps.Point(0, 0) // anchor
      };
      const source_marker = new googleMaps.Marker({
        map: map,
        position: source_position,
        animation: googleMaps.Animation.DROP,
        icon: source_icon,
      });

      const destination_marker = new googleMaps.Marker({
        map: map,
        position: destination_position,
        animation: googleMaps.Animation.DROP,
        icon: destination_icon
      });

      source_marker.setMap(map);
      destination_marker.setMap(map);

      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: 6,
          strokeOpacity: 1,
          strokeColor: 'blue'
        },
        suppressMarkers: true
      });

      map.setCenter(source_position);
      this.renderer.addClass(mapEl, 'visible');
    } catch (e) {
      console.log(e);
    }

    

  }}