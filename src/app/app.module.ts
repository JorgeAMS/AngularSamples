import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AmsService } from './ams.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyDni4S3_VDdbd3aViKs32VBlFFpvKtmwgU'
      apiKey: 'AIzaSyBFjJcSQF4jyIe4PKW9b6SItv-wDoCP2wU'
    })
  ],
  providers: [ AmsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
