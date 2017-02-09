import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardComponent } from './card/card.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MasterComponent } from './master/master.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchPipe } from './search.pipe';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', component: MasterComponent},
  {path: 'characters/id/:id', component: CharacterDetailComponent},
  {path: 'planets', component: MasterComponent},
  {path: 'planets/id/:id', component: PlanetDetailComponent},
  {path: 'films', component: MasterComponent},
  {path: 'films/id/:id', component: FilmDetailComponent},
  {path: 'species', component: MasterComponent},
  {path: 'species/id/:id', component: SpeciesDetailComponent},
  {path: 'vehicles', component: MasterComponent},
  {path: 'vehicles/id/:id', component: VehicleDetailComponent},
  {path: 'starships', component: MasterComponent},
  {path: 'starships/id/:id', component: StarshipDetailComponent},
  {path: '**', component: NotFoundComponent}

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharacterDetailComponent,
    PlanetDetailComponent,
    FilmDetailComponent,
    SpeciesDetailComponent,
    VehicleDetailComponent,
    StarshipDetailComponent,
    NotFoundComponent,
    CardComponent,
    BreadcrumbsComponent,
    MasterComponent,
    PreloaderComponent,
    PreloaderComponent,
    CapitalizePipe,
    SearchPipe
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
