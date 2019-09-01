import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RallyService {


private heroesUrl = 'api/heroes';  // URL to web api
private rallyCount=0;
hero: Hero;
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  //Adds a hero to rally
  addHero (hero: Hero): Observable<Hero> {
    if(hero.inRally){
      return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
        tap(_ => this.log(`${hero.name} is already in your rally`)),
        catchError(this.handleError<any>('updateHero'))
      );
    }
    else{
      if(this.rallyCount>=22){
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
          tap(_ => this.log(`No room in rally for=${hero.id}`)),
          catchError(this.handleError<any>('updateHero'))
        );
      }
  hero.inRally=true;
  this.rallyCount++;
}
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`${hero.name} has joined your rally `)),
    catchError(this.handleError<any>('updateHero'))
  );
  }

  rallyHero (id: number): Observable<Hero> {

   if(this.getRallyStatus) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id for rally=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
   }
    }



  removeHero(hero: Hero): Observable<Hero>{
   hero.inRally=false;
   this.rallyCount--;   
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Removed Hero:=${hero.id}: ${hero.name} from rally`)),
      catchError(this.handleError<any>('updateHero'))
    ); 
  }

  getRallyStatus(hero: Hero): boolean{
    
  return hero.inRally;
  }

      getHeroes (): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
          .pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
          );
      }

  /** Log a RallyService message with the MessageService */
private log(message: string) {
  this.messageService.add(`RallyService: ${message}`);
}
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
    }