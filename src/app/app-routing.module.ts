import { NgModule } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
