import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from 'src/app/countries/countries.component';
import { RouteResolver } from 'src/app/countries/countries.resolve';
import { CountryInDetailComponent } from 'src/app/country-in-detail/country-in-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: 'countries',
    component: CountriesComponent,
    resolve: { RouteResolver }
  },
  {
    path: 'countrydetail/:countryName',
    component: CountryInDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver]
})
export class AppRoutingModule { }
