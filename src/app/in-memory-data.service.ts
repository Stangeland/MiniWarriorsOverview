import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {


  createDb() {

    const rallyCount = 0;
    const heroes = [
      { id: 1, name: 'Alash', inRally: false, role: 'Arabalist' },
      { id: 2, name: 'Charles Martel', inRally: false, role: 'Pavisor' },
      { id: 3, name: 'Gilles de Rais', inRally: false, role: 'Pavisor' },
      { id: 4, name: 'Octavius', inRally: false, role: 'Infantry' },
      { id: 5, name: 'El Cid', inRally: false, role: 'Cavalry' },
      { id: 6, name: 'Hedvig', inRally: false, role: 'Arbalist' },
      { id: 7, name: 'Philinius', inRally: false, role: 'Mage' },
      { id: 8, name: 'Edward IV', inRally: false, role: 'Mage' },
      { id: 9, name: 'Elizabeth', inRally: false, role: 'Mage' },
      { id: 10, name: 'Leonidas', inRally: false, role: 'Pikeman' },
      { id: 11, name: 'Joan', inRally: false, role: 'Infantry' },
      { id: 12, name: 'Gawain', inRally: false, role: 'Pikeman' },
      { id: 13, name: 'Edward', inRally: false, role: 'Musketeer' },
      { id: 14, name: 'Robinhood', inRally: false, role: 'Archer' },
      { id: 15, name: 'Cannon', inRally: false, role: 'Savage Cavalry' },
      { id: 16, name: 'Lancelot', inRally: false, role: 'Cavalry' },
      { id: 17, name: 'Morgana', inRally: false, role: 'Mage' },
      { id: 18, name: 'Kelly', inRally: false, role: 'Arbalist' },
      { id: 19, name: 'Sarah', inRally: false, role: 'Mage' },
      { id: 20, name: 'William Tell', inRally: false, role: 'Archer' },
      { id: 21, name: 'Einar', inRally: false, role: 'Mounted Archer' },
      { id: 22, name: 'Charles the Great', inRally: false, role: 'Cavalry' },
      { id: 23, name: 'Saladin', inRally: false, role: 'Infantry' },
      { id: 24, name: 'Achilles', inRally: false, role: 'Pikeman' },
      { id: 25, name: 'Manto', inRally: false, role: 'Mage' },
      { id: 26, name: 'Jerome', inRally: false, role: 'Mage' },
      { id: 27, name: 'Ragnar', inRally: false, role: 'Infantry' },
      { id: 28, name: 'Mary Read', inRally: false, role: 'Musketeer' },
      { id: 29, name: 'Bellerophon', inRally: false, role: 'Mounted Archer' },
      { id: 30, name: 'Terim', inRally: false, role: 'Musketeer' },
      { id: 31, name: 'Seth', inRally: false, role: 'Arbalist' },
      { id: 32, name: 'Anatole', inRally: false, role: 'Archer' },
      { id: 33, name: 'Seamas', inRally: false, role: 'Infantry' },
      { id: 34, name: 'Hyacinth', inRally: false, role: 'Cavalry' },
      { id: 35, name: 'Eugene', inRally: false, role: 'Paviser' },
      { id: 36, name: 'Cedric', inRally: false, role: 'Paviser' },
      { id: 37, name: 'Ignatius', inRally: false, role: 'Pikeman' },
      { id: 38, name: 'Circe', inRally: false, role: 'Mage' },
      { id: 39, name: 'Urza', inRally: false, role: 'Pikeman' },
      { id: 40, name: 'Hilda', inRally: false, role: 'Cavalry' },
      { id: 41, name: 'Carter', inRally: false, role: 'Paviser' },
      { id: 42, name: 'Uriah', inRally: false, role: 'Cavalry' },
      { id: 43, name: 'William', inRally: false, role: 'Infantry' },
      { id: 44, name: 'Belthor', inRally: false, role: 'Mage' },
      { id: 45, name: 'Merlin', inRally: false, role: 'Mage' },
      { id: 46, name: 'Sarky', inRally: false, role: 'Musketeer' },
      { id: 47, name: 'Helmar', inRally: false, role: 'Infantry' },
      { id: 48, name: 'Shazzo', inRally: false, role: 'Paviser' },
      { id: 49, name: 'Reinhard', inRally: false, role: 'Infantry' },
      { id: 50, name: 'Nicolai', inRally: false, role: 'Mounted Archer' },
      { id: 51, name: 'Galahad', inRally: false, role: 'Cavalry' },
      { id: 52, name: 'Marco Polo', inRally: false, role: 'Musketeer' },
      { id: 53, name: 'Vivian', inRally: false, role: 'Mage' },
      { id: 54, name: 'Constantine', inRally: false, role: 'Infantry' },
      { id: 55, name: 'Baldwin IV', inRally: false, role: 'Cavalry' },
      { id: 56, name: 'Napoleon', inRally: false, role: 'Musketeer' },
      { id: 57, name: 'Kim Yu-sin', inRally: false, role: 'Archer' },
      { id: 58, name: 'Eulji Mundeok', inRally: false, role: 'Cavalry' },
      { id: 59, name: 'Choe Yeong', inRally: false, role: 'Paviser' },
      { id: 60, name: 'Tapster', inRally: false, role: 'Mage' },
      { id: 61, name: 'Blewett', inRally: false, role: 'Musketeer' },
      { id: 62, name: 'Dahlia', inRally: false, role: 'Savage' },
      { id: 63, name: 'Lillicrop', inRally: false, role: 'Musketeer' },
      { id: 64, name: 'MonkeyKing', inRally: false, role: 'Monkey' },
      { id: 65, name: 'Laverty', inRally: false, role: 'Cavalry' },
      { id: 66, name: 'Eileen', inRally: false, role: 'Mounted Archer' },
      { id: 67, name: 'Paris', inRally: false, role: 'Archer' },
      { id: 68, name: 'Barfoot', inRally: false, role: 'Savage' },
      { id: 69, name: 'Cantello', inRally: false, role: 'Savage' },
      { id: 70, name: 'Pettyfer', inRally: false, role: 'Savage' },
      { id: 71, name: 'Morgan le Fay', inRally: false, role: 'Mage' },
      { id: 72, name: 'King Richard', inRally: false, role: 'Paviser' }
    ];

    return { heroes, rallyCount };
  }
}
