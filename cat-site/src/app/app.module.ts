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

// Generic Components
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
