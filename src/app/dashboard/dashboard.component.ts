import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  frontline = ['loading'];
  remainder = 0;
  midline = ['loading'];
  centerline = ['loading'];
  backline = ['loading'];
  heroes: Hero[] = [];
  rallyHeroes: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      if (event.previousIndex > event.currentIndex) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        moveItemInArray(event.container.data, event.currentIndex + 1, event.previousIndex);
      } else if (event.previousIndex === event.currentIndex) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        moveItemInArray(event.container.data, event.currentIndex - 1, event.previousIndex);
      }
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      transferArrayItem(event.container.data,
        event.previousContainer.data,
        event.currentIndex + 1,
        event.previousIndex
      );
    }
  }

  ngOnInit() {
    this.getHeroes();
  }

  allocateHeroes(): void {
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].inRally) {
        this.rallyHeroes.push(this.heroes[i].name);
      }
    }
    this.remainder = 22 - this.rallyHeroes.length + 32;
    for (let i = this.rallyHeroes.length; i < this.remainder; i++) {
      this.rallyHeroes.push('X');
    }
    this.frontline = this.rallyHeroes.splice(0, 8);
    this.backline = this.rallyHeroes.splice(0, 8);
    this.centerline = this.rallyHeroes.splice(0, 8);
    this.midline = this.rallyHeroes.splice(0, 8);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
        this.allocateHeroes();
      }
    );
  }
}
