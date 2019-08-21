import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {RallyService} from '../rally.service';
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-rally',
  templateUrl: './rally.component.html',
  styleUrls: ['./rally.component.css']
})
export class RallyComponent implements OnInit {
heroes: Hero[];
    constructor(
    
      private rallyService: RallyService,
  
    ) {}
  
    ngOnInit(): void {
    //  this.getHeroes();
    }
  
    getHeroes(): void {
      this.rallyService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.rallyService.addHero({ name }as unknown as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }
 
    save(): void{
     // this.heroService.setInRally(this.hero).subscribe(()=> this.goBack());
    }
    delete(): void{
     // this.heroService.unsetInRally(this.hero);//.subscribe(()=> this.goBack());
    }
  }
