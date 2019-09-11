import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  

  createDb() {
    
    var rallyCount=0;
     var heroes = [
      { id: 1, name: 'Alash' , inRally: false, Role: 'Arabalist'},
      { id: 2, name: 'Charles Martel' , inRally: false, Role: 'Pavisor' },
      { id: 3, name: 'Gilles de Rais' , inRally: false, Role: 'Pavisor' },
      { id: 4, name: 'Octavius'  , inRally: false, Role: 'Infantry'},
      { id: 5, name: 'El Cid'  , inRally: false, Role: 'Cavalry'},
      { id: 6, name: 'Hedvig'  , inRally: false, Role: 'Arbalist'},
      { id: 7, name: 'Philinius' , inRally: false, Role: 'Mage' },
      { id: 8, name: 'Edward IV' , inRally: false, Role: 'Mage' },
      { id: 9, name: 'Elizabeth' , inRally: false, Role: 'Mage' },
      { id: 10, name: 'Leonidas' , inRally: false, Role: 'Pikeman' },
      { id: 11, name: 'Joan'  , inRally: false, Role: 'Infantry'},
      { id: 12, name: 'Gawain'  , inRally: false, Role: 'Pikeman'},
      { id: 13, name: 'Edward'  , inRally: false, Role: 'Musketeer'},
      { id: 14, name: 'Robinhood'  , inRally: false, Role: 'Archer'},
      { id: 15, name: 'Cannon'  , inRally: false, Role: 'Savage Cavalry'},
      { id: 16, name: 'Lancelot'  , inRally: false, Role: 'Cavalry'},
      { id: 17, name: 'Morgana' , inRally: false, Role: 'Mage' },
      { id: 18, name: 'Kelly'  , inRally: false, Role: 'Arbalist'},
      { id: 19, name: 'Sarah' , inRally: false, Role: 'Mage' },
      { id: 20, name: 'William Tell' , inRally: false, Role: 'Archer' },
      { id: 21, name: 'Einar'  , inRally: false, Role: 'Mounted Archer'},
      { id: 22, name: 'Charles the Great' , inRally: false, Role: 'Cavalry' },
      { id: 23, name: 'Saladin' , inRally: false, Role: 'Infantry' },
      { id: 24, name: 'Achilles' , inRally: false, Role: 'Pikeman' },
      { id: 25, name: 'Manto' , inRally: false, Role: 'Mage' },
      { id: 26, name: 'Jerome' , inRally: false, Role: 'Mage' },
      { id: 27, name: 'Ragnar'  , inRally: false, Role: 'Infantry'},
      { id: 28, name: 'Mary Read' , inRally: false, Role: 'Musketeer' },
      { id: 29, name: 'Bellerophon' , inRally: false, Role: 'Mounted Archer' },
      { id: 30, name: 'Terim'  , inRally: false, Role: 'Musketeer'},
      { id: 31, name: 'Seth' , inRally: false, Role: 'Arbalist' },
      { id: 32, name: 'Anatole'  , inRally: false, Role: 'Archer'},
      { id: 33, name: 'Seamas' , inRally: false, Role: 'Infantry' },
      { id: 34, name: 'Hyacinth' , inRally: false, Role: 'Cavalry' },
      { id: 35, name: 'Eugene' , inRally: false, Role: 'Paviser' },
      { id: 36, name: 'Cedric' , inRally: false, Role: 'Paviser' },
      { id: 37, name: 'Ignatius' , inRally: false, Role: 'Pikeman' },
      { id: 38, name: 'Circe'  , inRally: false, Role: 'Mage'},
      { id: 39, name: 'Urza'  , inRally: false, Role: 'Pikeman'},
      { id: 40, name: 'Hilda'  , inRally: false, Role: 'Cavalry'},
      { id: 41, name: 'Carter'  , inRally: false, Role: 'Paviser'},
      { id: 42, name: 'Uriah'  , inRally: false, Role: 'Cavalry'},
      { id: 43, name: 'William'  , inRally: false, Role: 'Infantry'},
      { id: 44, name: 'Belthor'  , inRally: false, Role: 'Mage'},
      { id: 45, name: 'Merlin'  , inRally: false, Role: 'Mage'},
      { id: 46, name: 'Sarky'  , inRally: false, Role: 'Musketeer'},
      { id: 47, name: 'Helmar'  , inRally: false, Role: 'Infantry'},
      { id: 48, name: 'Shazzo'  , inRally: false, Role: 'Paviser'},
      { id: 49, name: 'Reinhard'  , inRally: false, Role: 'Infantry'},
      { id: 50, name: 'Nicolai'  , inRally: false, Role: 'Mounted Archer'},
      { id: 51, name: 'Galahad'  , inRally: false, Role: 'Cavalry'},
      { id: 52, name: 'Marco Polo'  , inRally: false, Role: 'Musketeer'},
      { id: 53, name: 'Vivian'  , inRally: false, Role: 'Mage'},
      { id: 54, name: 'Constantine'  , inRally: false, Role: 'Infantry'},
      { id: 55, name: 'Baldwin IV'  , inRally: false, Role: 'Cavalry'},
      { id: 56, name: 'Napoleon'  , inRally: false, Role: 'Musketeer'},
      { id: 57, name: 'Kim Yu-sin'  , inRally: false, Role: 'Archer'},
      { id: 58, name: 'Eulji Mundeok'  , inRally: false, Role: 'Cavalry'},
      { id: 59, name: 'Choe Yeong'  , inRally: false, Role: 'Paviser'},
      { id: 60, name: 'Tapster'  , inRally: false, Role: 'Mage'},
      { id: 61, name: 'Blewett'  , inRally: false, Role: 'Musketeer'},
      { id: 62, name: 'Dahlia'  , inRally: false, Role: 'Savage'},
      { id: 63, name: 'Lillicrop'  , inRally: false, Role: 'Musketeer'},
      { id: 64, name: 'MonkeyKing'  , inRally: false, Role: 'Monkey'},
      { id: 65, name: 'Laverty'  , inRally: false, Role: 'Cavalry'},
      { id: 66, name: 'Eileen'  , inRally: false, Role: 'Mounted Archer'},
      { id: 67, name: 'Paris'  , inRally: false, Role: 'Archer'},
      { id: 68, name: 'Barfoot'  , inRally: false, Role: 'Savage'},
      { id: 69, name: 'Cantello'  , inRally: false, Role: 'Savage'},
      { id: 70, name: 'Pettyfer'  , inRally: false, Role: 'Savage'},
      { id: 71, name: 'Morgan le Fay'  , inRally: false, Role: 'Mage'},
      { id: 72, name: 'King Richard' , inRally: false, Role: 'Paviser' }
    ];
    
    return {heroes, rallyCount};
  }
}