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
hero: Hero;
isInRally=true;
    constructor(
  
      private rallyService: RallyService,
      private route: ActivatedRoute,
  
    ) {}
  
    ngOnInit(): void {
 //Add rallystatus on load
    this.getHeroes();
   // this.getRallyHeroes();
    
    }
  
    getHeroes(): void {
      this.rallyService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
   /* //TODO: Check if hero is in rally
    getRally(): void{
      if(this.rallyService.getRallyStatus)
      this.getHero;
    }
*/


/*
getRallyHeroes(): void {
  for(let i=1; i<=72; i++)
  this.getRallyHero(i);
} */

    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.rallyService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.rallyService.addHero({ name }as unknown as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }
 
   /* save(): void{
     // this.heroService.setInRally(this.hero).subscribe(()=> this.goBack());
    } */
    delete(): void{  //Find a way to send the hero (Object this.hero is undefined)
      this.rallyService.removeHero(this.hero);//.subscribe(()=> this.goBack());
      console.log("Deleted");
    }




  }

