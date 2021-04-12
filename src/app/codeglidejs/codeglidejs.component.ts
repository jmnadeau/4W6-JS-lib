import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codeglidejs',
  templateUrl: './codeglidejs.component.html'
})
export class CodeglidejsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  codeHTML=`
  <div style="width: 100%;">
    <div class="glide" >
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide" style="height: 400px;" *ngFor="let i of images" #glideitems>
            <img [src]="i" style="object-fit: cover;width: 100%; height: 100%;">
          </li>
        </ul>
      </div>

      <!-- Les flèches pour le déplacement -->
      <div class="glide__arrows" data-glide-el="controls">
        <div class="arrow glide__arrow glide__arrow--left" data-glide-dir="<">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="align-self: center;">
            <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
          </svg>
        </div>
        <div class="arrow glide__arrow glide__arrow--right" data-glide-dir=">">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="align-self: center;">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  `;
  codeCSS=`
  .arrow {
    background: gray;
    border-radius: 25px;
    height: 50px;
    width: 50px;
    display: flex;
    border: none;
  }
  `;
  codeTS=`
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

  `;
}
