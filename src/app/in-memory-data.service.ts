import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  

  createDb() {
     var heroes = [
      { id: 1, name: 'Alash' , inRally: false},
      { id: 2, name: 'Charles Martel' , inRally: false },
      { id: 3, name: 'Gilles de Rais' , inRally: false },
      { id: 4, name: 'Octavius'  , inRally: false},
      { id: 5, name: 'El Cid'  , inRally: false},
      { id: 6, name: 'Hedvig'  , inRally: false},
      { id: 7, name: 'Philinius' , inRally: false },
      { id: 8, name: 'Edward IV' , inRally: false },
      { id: 9, name: 'Elizabeth' , inRally: false },
      { id: 10, name: 'Leonidas' , inRally: false },
      { id: 11, name: 'Joan'  , inRally: false},
      { id: 12, name: 'Gawain'  , inRally: false},
      { id: 13, name: 'Edward'  , inRally: false},
      { id: 14, name: 'Robinhood'  , inRally: false},
      { id: 15, name: 'Cannon'  , inRally: false},
      { id: 16, name: 'Lancelot'  , inRally: false},
      { id: 17, name: 'Morgana' , inRally: false },
      { id: 18, name: 'Kelly'  , inRally: false},
      { id: 19, name: 'Sarah' , inRally: false },
      { id: 20, name: 'William Tell' , inRally: false },
      { id: 21, name: 'Einar'  , inRally: false},
      { id: 22, name: 'Charles the Great' , inRally: false },
      { id: 23, name: 'Saladin' , inRally: false },
      { id: 24, name: 'Achilles' , inRally: false },
      { id: 25, name: 'Manto' , inRally: false },
      { id: 26, name: 'Jerome' , inRally: false },
      { id: 27, name: 'Ragnar'  , inRally: false},
      { id: 28, name: 'Mary Read' , inRally: false },
      { id: 29, name: 'Bellerophon' , inRally: false },
      { id: 30, name: 'Terim'  , inRally: false},
      { id: 31, name: 'Seth' , inRally: false },
      { id: 32, name: 'Anatole'  , inRally: false},
      { id: 33, name: 'Seamas' , inRally: false },
      { id: 34, name: 'Hyacinth' , inRally: false },
      { id: 35, name: 'Eugene' , inRally: false },
      { id: 36, name: 'Cedric' , inRally: false },
      { id: 37, name: 'Ignatius' , inRally: false },
      { id: 38, name: 'Circe'  , inRally: false},
      { id: 39, name: 'Urza'  , inRally: false},
      { id: 40, name: 'Hilda'  , inRally: false},
      { id: 41, name: 'Carter'  , inRally: false},
      { id: 42, name: 'Uriah'  , inRally: false},
      { id: 43, name: 'William'  , inRally: false},
      { id: 44, name: 'Belthor'  , inRally: false},
      { id: 45, name: 'Merlin'  , inRally: false},
      { id: 46, name: 'Sarky'  , inRally: false},
      { id: 47, name: 'Helmar'  , inRally: false},
      { id: 48, name: 'Shazzo'  , inRally: false},
      { id: 49, name: 'Reinhard'  , inRally: false},
      { id: 50, name: 'Nicolai'  , inRally: false},
      { id: 51, name: 'Galahad'  , inRally: false},
      { id: 52, name: 'Marco Polo'  , inRally: false},
      { id: 53, name: 'Vivian'  , inRally: false},
      { id: 54, name: 'Constantine'  , inRally: false},
      { id: 55, name: 'Baldwin IV'  , inRally: false},
      { id: 56, name: 'Napoleon'  , inRally: false},
      { id: 57, name: 'Kim Yu-sin'  , inRally: false},
      { id: 58, name: 'Eulji Mundeok'  , inRally: false},
      { id: 59, name: 'Choe Yeong'  , inRally: false},
      { id: 60, name: 'Tapster'  , inRally: false},
      { id: 61, name: 'Blewett'  , inRally: false},
      { id: 62, name: 'Dahlia'  , inRally: false},
      { id: 63, name: 'Lillicrop'  , inRally: false},
      { id: 64, name: 'MonkeyKing'  , inRally: false},
      { id: 65, name: 'Laverty'  , inRally: false},
      { id: 66, name: 'Eileen'  , inRally: false},
      { id: 67, name: 'Paris'  , inRally: false},
      { id: 68, name: 'Barfoot'  , inRally: false},
      { id: 69, name: 'Cantello'  , inRally: false},
      { id: 70, name: 'Pettyfer'  , inRally: false},
      { id: 71, name: 'Morgan le Fay'  , inRally: false},
      { id: 72, name: 'King Richard' , inRally: false }
    ];
    
    
    return {heroes};
  }
}