import { STEPPER_GLOBAL_OPTIONS, STEP_STATE } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class AppComponent implements OnInit {

// For Deploy
// https://github.com/angular-schule/angular-cli-ghpages
// ng deploy --base-href=/4W6-JS-lib/

  images= [
    "http://localhost:4200/assets/images/image (1).jpg",
    "http://localhost:4200/assets/images/image (2).jpg",
    "http://localhost:4200/assets/images/image (3).jpg",
    "http://localhost:4200/assets/images/image (4).jpg",
    "http://localhost:4200/assets/images/image (5).jpg",
    "http://localhost:4200/assets/images/image (6).jpg",
    "http://localhost:4200/assets/images/image (7).jpg",
    "http://localhost:4200/assets/images/image (8).jpg",
    "http://localhost:4200/assets/images/image (9).jpg",
    "http://localhost:4200/assets/images/image (10).jpg",
    "http://localhost:4200/assets/images/image (11).jpg",
    "http://localhost:4200/assets/images/image (12).jpg",
    "http://localhost:4200/assets/images/image (13).jpg",
    "http://localhost:4200/assets/images/image (14).jpg",
    "http://localhost:4200/assets/images/image (15).jpg",
    "http://localhost:4200/assets/images/image (16).jpg",
    "http://localhost:4200/assets/images/image (17).jpg",
    "http://localhost:4200/assets/images/image (18).jpg",
    "http://localhost:4200/assets/images/image (19).jpg",
    "http://localhost:4200/assets/images/image (20).jpg",
    "http://localhost:4200/assets/images/image (21).jpg",
    "http://localhost:4200/assets/images/image (22).jpg",
    "http://localhost:4200/assets/images/image (23).jpg",
    "http://localhost:4200/assets/images/image (24).jpg",
    "http://localhost:4200/assets/images/image (25).jpg",
    "http://localhost:4200/assets/images/image (26).jpg",
    "http://localhost:4200/assets/images/image (27).jpg",
  ];



  ngOnInit(): void {

  }


  getIcon(index: number) {
    if(index === 0) {
      return 'speaker_notes';
    } else if(index === 0) {
      return 'speaker_notes';
    } else if(index === 1) {
      return 'speaker_notes';
    } else if(index === 2) {
      return 'speaker_notes';
    } else if(index === 3) {
      return 'code';
    } else if(index === 4) {
      return 'slideshow';
    } else if(index === 5) {
      return 'speaker_notes';
    } else if(index === 6) {
      return 'code';
    } else {
      return 'slideshow';
    }
  }



}
