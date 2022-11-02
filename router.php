const routes: Routes = [
  {
    path:'',
    redirectTo: 'beers', //component: BreweryHomeComponent
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: BreweryBeersComponent,
  },
  {
    path: 'about',
    component: BreweryAboutComponent,
  }
  {
    path: 'brewery',
    component: BreweryComponent,
  }
];
