# DummyUiLib

Instalar [Verdaccio](https://verdaccio.org/)
Ejecuta `ng new angular-schematics --no-create-application` para crear crear un proyecto vacío.

Ejecuta `ng generate library dummy-ui-lib` para crear una nueva librería.

Ejecuta `npm install dummy-ui-lib --registry http://localhost:4873` para publicar una librería en Verdaccio.

Ejectura `npm run build --prefix .\projects\dummy-ui-lib\` para compilar el proyecto principal y el schematic.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Code scaffolding

Run `ng generate component component-name --project dummy-ui-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project dummy-ui-lib`.

> Note: Don't forget to add `--project dummy-ui-lib` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build dummy-ui-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build dummy-ui-lib`, go to the dist folder `cd dist/dummy-ui-lib` and run `npm publish`.

## Running unit tests

Run `ng test dummy-ui-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
