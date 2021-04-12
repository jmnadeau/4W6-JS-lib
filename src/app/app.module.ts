import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProblemejsComponent } from './problemejs/problemejs.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { MasonryComponent } from './masonry/masonry.component';
import { CodemsnryComponent } from './codemsnry/codemsnry.component';
import { ResultmsnryComponent } from './resultmsnry/resultmsnry.component';
import { GlidejsComponent } from './glidejs/glidejs.component';
import { CodeglidejsComponent } from './codeglidejs/codeglidejs.component';
import { ResultglidejsComponent } from './resultglidejs/resultglidejs.component';

@NgModule({
  declarations: [								
    AppComponent,
      ProblemejsComponent,
      ViewchildComponent,
      MasonryComponent,
      CodemsnryComponent,
      ResultmsnryComponent,
      GlidejsComponent,
      CodeglidejsComponent,
      ResultglidejsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
