import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatButtonModule, MatCardModule, MatToolbarModule} from "@angular/material";
import { CardContainerComponent } from './card-container/card-container.component';
import { CatCardComponent } from './cat-card/cat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardContainerComponent,
    CatCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
