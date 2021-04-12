import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import Glide from '@glidejs/glide'

@Component({
  selector: 'app-resultglidejs',
  templateUrl: './resultglidejs.component.html'
})
export class ResultglidejsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() images: string[] = [];
  @ViewChildren('glideitems') glideitems: QueryList<any>;

  ngAfterViewInit() {
    this.glideitems.changes.subscribe(e => {
      this.initGlide();
    });

    // le ngFor est déjà fait
    if(this.glideitems.length > 0) {
      this.initGlide();
    }
  }

  initGlide() {
    var glide = new Glide('.glide', {
      type: 'carousel',
      focusAt: 'center',
      perView: 5
    });

    glide.mount();
  }
}
