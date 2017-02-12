# SWpaedia

This is an Angular2 web application that shows data about Star Wars universe. It uses [SWpaedia API](https://github.com/nihillo/swpaedia-api) as an intermediate API to retrieve contents from both [SWAPI](https://swapi.co/) and [Wookieepedia](http://starwars.wikia.com/). This intermediate API was built in order to supply missing contents from SWAPI, such as images, and cache their contents to reduce abuse of third peer API requests.

The application is a catalog of informations and technical data, categorized in Films, Characters, Planets, Species, Starships and Vehicles. It uses Angular 2 as an architecture and data processor, and Materialize CSS framework for layout and styles.

## Demo

A working demo can be found at [http://swpaedia.nihillo.es](http://swpaedia.nihillo.es)


## Technologies

- Angular2 
- Materialize CSS framework 


## Installation and use

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
