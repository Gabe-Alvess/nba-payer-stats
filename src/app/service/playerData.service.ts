import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerResponse } from '../interfaces/PlayerResponse';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  playerName: string = 'LeBron James';

  constructor(private http: HttpClient) {}

  getPlayerResponse(playerName: string): Observable<PlayerResponse> {
    let url = `https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`;
    return this.http.get<PlayerResponse>(url);
  }
}
