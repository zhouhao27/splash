# Splash

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3. It will convert text from splash-video.com to csv for Yahoo and CMS.

The final result is in [Splash-Video-Spreadsheet-Generation](http://zhouhao.cf/splash/)

## Creation of the project

> ng new splash

## Dependencies

- [ng2-smart-table](https://github.com/akveo/ng2-smart-table)

> npm install --save ng2-smart-table

- [alasql](https://github.com/agershun/alasql)

> npm install alasql --save

Add the following line in angular-cli.json:
```
"scripts": ["../node_modules/alasql/dist/alasql.min.js","../node_modules/xlsx/dist/xlsx.core.min.js"]
```

In app.module.ts:

`import * as alasql from 'alasql';`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

> ng github-pages:deploy --message "Optional commit message"

> The original github-pages is in: zhouhao27.github.io

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Issues

Get the following error message:

> ERROR in /Users/myproject/node_modules/ng2-smart-table/src/ng2-smart-table/lib/data-source/server/server.data-source.ts (70,12): Type 'Observable<Response>' is not assignable to type 'Observable<any>'.
  Property 'source' is protected but type 'Observable<T>' is not a class derived from 'Observable<T>'.)

When I generated the project in `angular-cli 1.0.0-beta.28.3`

Temp solution:

- Remove `rxjs` folder in ng2-smart-table/node_modules
- Remove `"rxjs": "~5.0.2"` in `dependencies` in package.json
- Add this in package.json
```
  "peerDependencies": {
    "rxjs": "~5.0.2"
  },
```
- Run `npm i`

## TODO

- export xls

Study:

https://github.com/DxCx/ts-xlsx
https://github.com/eligrey/FileSaver.js
https://github.com/SheetJS/js-xlsx
https://github.com/agershun/alasql

https://github.com/faisalman/simple-excel-js

- Download simple-excel.js and save it in src/vendor folder
- Add `vendor/simple-excel.js` to scripts in angular-cli.json

Or 

- Add to index.html

This doesn't work because XLSX not implemented yet.

## Reference

[For csv export](http://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/)
