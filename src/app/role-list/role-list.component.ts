import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { RallyService } from '../rally.service';
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  heroes: Hero[] = [];
  role = '';
  constructor(private heroService: HeroService, private route: ActivatedRoute, private rallyService: RallyService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  choose(role: string): void {
    this.role = role;
  }
  setInRally(hero: Hero): void {
    this.rallyService.addHero(hero).subscribe(() => hero = hero);

  }
}


