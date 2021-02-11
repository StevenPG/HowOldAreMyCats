import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Project Components
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentComponent } from './content/content.component';

// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

// Generic Components
import { FlexLayoutModule } from '@angular/flex-layout';
import { InstagramfeedComponent } from './instagramfeed/instagramfeed.component';
import { CatcardComponent } from './catcard/catcard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ContentComponent,
    InstagramfeedComponent,
    CatcardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
