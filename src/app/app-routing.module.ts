import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { RallyComponent } from './rally/rally.component';
import {RoleListComponent} from './role-list/role-list.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'rally',
  children: [
    {path: '', component: RallyComponent}, 
   {path: ':id', component: RallyComponent}
    ] },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'role', component: RoleListComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }