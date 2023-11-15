import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GmapService } from 'src/app/services/gmap.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit {
  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  source: any = { lat: -33.0336892, lng: -71.535759 };
  dest: any = { lat: -33.0336892, lng: -71.535759 };

  constructor(
    private maps: GmapService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.loadMap();
    
  }

  async loadMap(){
    try{
      let googleMaps: any = await this.maps.loadGoogleMaps(); 
      const mapEl = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: { lat: this.source.lat, lng: this.source.lng },
        disableDefaultUI: true,
        zoom: 10,
      });
      const source_position = new googleMaps.LatLng(this.source.lat, this.source.lng);
      map.setCenter(source_position);
      this.renderer.addClass(mapEl, 'visible');
    } catch(e){
      console.log(e)
    }
  }

}
