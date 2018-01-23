import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { ArtistComponent } from './components/artist/artist.component'

const APP_ROUTES: Routes = [ /*Aca vamos agregando las rutas a los components */
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
