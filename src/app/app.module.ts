import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:id', component: CharacterDetailComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/:id', component: PlanetDetailComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'films/:id', component: FilmDetailComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'species/:id', component: SpeciesDetailComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'vehicles/:id', component: VehicleDetailComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starships/:id', component: StarshipDetailComponent},
  {path: '**', component: NotFoundComponent}

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharactersComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
    CharacterDetailComponent,
    PlanetDetailComponent,
    FilmDetailComponent,
    SpeciesDetailComponent,
    VehicleDetailComponent,
    StarshipDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
