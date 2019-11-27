import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { RallyComponent } from './rally/rally.component';
import { RoleListComponent } from './role-list/role-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MerlinTrialComponent } from './merlin-trial/merlin-trial.component';
import { Rally2Component } from './dashboard/rally2/rally2.component';
import { Rally3Component } from './dashboard/rally/rally3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    RallyComponent,
    RoleListComponent,
    MerlinTrialComponent,
    Rally2Component,
    Rally3Component
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    ),
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
