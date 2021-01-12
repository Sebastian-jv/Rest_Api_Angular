import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './dane/dane.component';



@Injectable({
  providedIn: 'root'
})
export class BazaService {
  host = 'https://imsi.pl:5000/';
  constructor(private http: HttpClient) { }
  
  getUser(username:string ): Observable<User> {
    return this.http.get<User>( this.host + "player/" + username );
}
  putUser(user:User): Observable<User> {
  return this.http.put<User>( this.host + "players/" + user.id , user);
}
 
}
