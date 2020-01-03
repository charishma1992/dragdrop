import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { AgmCoreModule } from '@agm/core';
import { CountryInDetailComponent } from './country-in-detail/country-in-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryInDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiASazcyivjbEs8FhyyU09tO1qU7xIpQs'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
