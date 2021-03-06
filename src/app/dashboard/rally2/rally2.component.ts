import { Component, OnInit } from '@angular/core';
import { RallyService } from 'src/app/rally.service';
import { MessageService } from 'src/app/message.service';
import { Hero } from 'src/app/hero';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-rally2',
  templateUrl: './rally2.component.html',
  styleUrls: ['./rally2.component.css']
})
export class Rally2Component implements OnInit {
  constructor(
    private heroService: RallyService,
    private messageService: MessageService
    ) { }
  frontline = ['loading'];
  remainder = 0;
  midline = ['loading'];
  centerline = ['loading'];
  backline = ['loading'];
  rally: string;
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
    // this.saveRally(event);
    //  console.log(this.centerline, this.backline, this.midline, this.frontline);
  }

  ngOnInit() {
    this.getHeroes();
    this.messageService.add('Dashboard: Clear rally if you have imported new heroes');
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
    this.backline = this.rallyHeroes.splice(0, 8);
    this.midline = this.rallyHeroes.splice(0, 8);
    this.centerline = this.rallyHeroes.splice(0, 8);
    this.frontline = this.rallyHeroes.splice(0, 8);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
        this.rally = localStorage.getItem('rally2');
        if (this.rally && this.rally.split(',') !== Array(32).fill('X')) {
          this.rallyHeroes = this.rally.split(',');
        }

        this.allocateHeroes();
      }
    );
  }
  saveRally() {
    this.rally = this.backline.toString() + ',' + this.midline.toString() + ',' +
      this.centerline.toString() + ',' + this.frontline.toString();
    console.log(this.rally);
    if ((this.rally.match(/X/g) || []).length === 10) {
      localStorage.setItem('rally2', this.rally);
      alert('Rally saved');
    } else {
      alert('Rally is not full, please fill up with heroes');
    }

  }
  clearRally() {
    localStorage.removeItem('rally2');
    alert('Rally is cleared');
  }
  refresh() {
    location.reload();
  }
}