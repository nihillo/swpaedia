import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../breadcrumbs.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
  providers: [GetDataService, BreadcrumbsService]
})
export class FilmDetailComponent implements OnInit, AfterViewInit {
	private sub: any;
  	public id: number;
  	public path: string;
    public breadcrumbspath: string;
  	private loading = false;
  	public title: string;
    public data: any;
    public characters: any;

  constructor (
  	private route: ActivatedRoute,
  	private dataserv: GetDataService
  ) {}

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.path = '/films/id/' + this.id;
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

        this.data.characters.forEach(
          (character, index) => {
            this.dataserv.getData(character).subscribe(
              char => {
                let url = this.data.characters[index].split('people').join('characters');
                this.data.characters[index] = {
                  name: char.name,
                  url: url
                };
            });
        });

        this.data.planets.forEach(
          (planet, index) => {
            this.dataserv.getData(planet).subscribe(
              pl => {
                this.data.planets[index] = {
                  name: pl.name,
                  url: this.data.planets[index]
                };
            });
        });

        this.data.starships.forEach(
          (starship, index) => {
            this.dataserv.getData(starship).subscribe(
              element => {
                this.data.starships[index] = {
                  name: element.name,
                  url: this.data.starships[index]
                };
            });
        });

        this.data.vehicles.forEach(
          (vehicle, index) => {
            this.dataserv.getData(vehicle).subscribe(
              element => {
                this.data.vehicles[index] = {
                  name: element.name,
                  url: this.data.vehicles[index]
                };
            });
        });

        this.data.species.forEach(
          (species, index) => {
            this.dataserv.getData(species).subscribe(
              element => {
                this.data.species[index] = {
                  name: element.name,
                  url: this.data.species[index]
                };
            });
        });

        // console.log(this.data.characters);
      }
    );
  }
}
