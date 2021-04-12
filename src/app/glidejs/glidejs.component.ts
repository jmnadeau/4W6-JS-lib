import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glidejs',
  templateUrl: './glidejs.component.html'
})
export class GlidejsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  codeNPM = `
  npm install @glidejs/glide`;
  codeBuildScripts = `
  "styles": [
    "./node_modules/@glidejs/glide/dist/css/glide.core.min.css",
    "./node_modules/@glidejs/glide/dist/css/glide.theme.min.css",
    "src/styles.css"
  ],
  "scripts": [
    "./node_modules/@glidejs/glide/dist/glide.min.js"
  ]
  `;
  codeDeclares = `
  import Glide from '@glidejs/glide';
  `;

}
