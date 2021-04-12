import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html'
})
export class ViewchildComponent implements OnInit {

  constructor() { }

  codeHTMLChild = `
  <div #grid>...</div>`;
  codeTSChild = `
  @ViewChild('grid') maReference: ElementRef;`;
  codeHTMLChildren = `
  <div #items *ngFor="let i of items">...</div>`;
  codeTSChildren = `
  @ViewChildren('items') maListeDeReferences: QueryList<any>;`;
  codeSubscribeChildren = `
  ngAfterViewInit() {
    this.maListeDeReferences.changes.subscribe(e => {
      ...
    });
    ...`;

  ngOnInit() {
  }
}
