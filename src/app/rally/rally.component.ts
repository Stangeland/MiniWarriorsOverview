import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RallyService} from '../rally.service';
import { Hero }         from '../hero';
@Component({
  selector: 'app-rally',
  templateUrl: './rally.component.html',
  styleUrls: ['./rally.component.css']
})
export class RallyComponent implements OnInit {
heroes: Hero[];
hero: Hero;
    constructor(
  
      private rallyService: RallyService,
      private route: ActivatedRoute,
  
    ) {}
  
    ngOnInit(): void {
 //Add rallystatus on load
    this.getHeroes();
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

    delete(hero: Hero): void{  
      this.heroes = this.heroes.filter(h => h !== hero);
      this.rallyService.removeHero(hero).subscribe();     
    }

  }

