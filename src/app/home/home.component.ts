import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public elements: Array<any>;

  constructor() { }

  ngOnInit() {
  	this.elements = [
  		{title: 'Films', url: '/films', image: '/assets/images/home-films.jpg'},
  		{title: 'Characters', url: '/characters', image: '/assets/images/home-characters.jpg'},
  		{title: 'Planets', url: '/planets', image: '/assets/images/home-planets.jpg'},
  		{title: 'Species', url: '/species', image: '/assets/images/home-species.jpg'},
  		{title: 'Starships', url: '/starships', image: '/assets/images/home-starships.jpg'},
  		{title: 'Vehicles', url: '/vehicles', image: '/assets/images/home-vehicles.jpg'}
  	];
  }

}
