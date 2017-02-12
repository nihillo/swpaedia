import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css'],
  providers: [GetDataService]
})
export class PlanetDetailComponent implements OnInit, AfterViewInit {
	private sub: any;
  	public id: number;
  	public path: string;
    public breadcrumbspath: string;
  	private loading = false;
  	public title: string;
    public data: any;
    public planets: any;

  constructor (
  	private route: ActivatedRoute,
  	private dataserv: GetDataService
  ) {}

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.path = '/planets/id/' + this.id;
    });
    this.getData();
  }

  ngAfterViewInit() {
  	// this.getData();
  }

  getData() {
  	this.loading = true;

  	this.dataserv.getData(this.path).subscribe(
      data => {
        this.loading = false;
        this.data = data;

        this.data.films.forEach(
          (film, index) => {
            this.dataserv.getData(film).subscribe(
              element => {
                this.data.films[index] = {
                  title: element.title,
                  url: this.data.films[index]
                };
            });
        });

        this.data.residents.forEach(
          (resident, index) => {
            this.dataserv.getData(resident).subscribe(
              char => {
                let url = this.data.residents[index].split('people').join('characters');
                this.data.residents[index] = {
                  name: char.name,
                  url: url
                };
            });
        });

        // this.data.planets.forEach(
        //   (planet, index) => {
        //     this.dataserv.getData(planet).subscribe(
        //       pl => {
        //         this.data.planets[index] = {
        //           name: pl.name,
        //           url: this.data.planets[index]
        //         };
        //     });
        // });

        // this.dataserv.getData(this.data.homeworld).subscribe(
        //   planet => {
        //     this.data.homeworld = {
        //       name: planet.name,
        //       url: this.data.homeworld
        //     };
        // });

        // this.data.starships.forEach(
        //   (starship, index) => {
        //     this.dataserv.getData(starship).subscribe(
        //       element => {
        //         this.data.starships[index] = {
        //           name: element.name,
        //           url: this.data.starships[index]
        //         };
        //     });
        // });

        // this.data.vehicles.forEach(
        //   (vehicle, index) => {
        //     this.dataserv.getData(vehicle).subscribe(
        //       element => {
        //         this.data.vehicles[index] = {
        //           name: element.name,
        //           url: this.data.vehicles[index]
        //         };
        //     });
        // });

        // this.dataserv.getData(this.data.species[0]).subscribe(
        //   element => {
        //     this.data.species = {
        //       name: element.name,
        //       url: this.data.species[0]
        //     };
        // });

      }
    );
  }
}
