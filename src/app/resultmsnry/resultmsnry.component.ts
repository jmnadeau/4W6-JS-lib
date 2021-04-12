import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

declare var Masonry: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-resultmsnry',
  templateUrl: './resultmsnry.component.html'
})
export class ResultmsnryComponent implements AfterViewInit {

  constructor() { }

  @Input() images: string[] = [];
  @ViewChild('masongrid') masongrid: ElementRef;
  @ViewChildren('masongriditems') masongriditems: QueryList<any>;

  ngAfterViewInit() {
    this.masongriditems.changes.subscribe(e => {
      this.initMasonry();
    });

    // le ngFor est déjà fait
    if(this.masongriditems.length > 0) {
      this.initMasonry();
    }
  }

  initMasonry() {
    var grid = this.masongrid.nativeElement;

    var msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: 320,
    });

    imagesLoaded( grid ).on( 'progress', function() {
      msnry.layout();
    });
  }
}
