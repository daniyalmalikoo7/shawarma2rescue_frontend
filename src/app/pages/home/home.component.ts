import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.runMe()
  }

  title = 'Interview Test';
  lat = 33.5651;
  lng = 73.0169;
  username = 'daniyalmalikoo7';

MapOptions:any = {
    center: {lat: this.lat, lng: this.lng},
    zoom: 6
  }

  markerOptions: google.maps.MarkerOptions = {draggable: false, clickable:true};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
    console.log('thi', this.markerPositions);
  }

  restaurants:any;


  runMe(){
    console.log('test');
    this.api.getRestaurants().subscribe(data=>{
      console.log('dataaaa', data);
      this.restaurants = data;
      this.restaurants.forEach(element => {
        this.markerPositions.push({lat:element.coordinates.coordinates[0], lng:element.coordinates.coordinates[1]})
      });

      

    })
  }


}
