import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html'
})
export class MasonryComponent {

  constructor() { }

  codeNPM = `
  npm install masonry-layout
  npm install imagesloaded`;
  codeBuildScripts = `
  "scripts": [
    "./node_modules/imagesloaded/imagesloaded.pkgd.min.js",
    "./node_modules/masonry-layout/dist/masonry.pkgd.min.js",
  ]
  `;
  codeDeclares = `
  declare var Masonry: any;
  declare var imagesLoaded: any;
  `;

}
