import { Component } from '@angular/core';
import { PlayerResponse } from '../interfaces/PlayerResponse';
import { PlayerDataService } from '../service/playerData.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  playerResponse?: PlayerResponse;
  playerName: string = '';
  playerFound: boolean = false;
  noPlayerFound: boolean = false;

  constructor(private playerDataService: PlayerDataService) {}

  searchPlayer() {
    this.getPlayerData();
    this.noPlayerFound = false;
    this.playerFound = false;
  }

  private getPlayerData() {
    this.playerDataService.getPlayerResponse(this.playerName).subscribe({
      next: (data: PlayerResponse) => {
        if (data.results[0]) {
          console.log(data);
          this.playerResponse = data;
          this.playerFound = true;
        } else {
          this.noPlayerFound = true;
        }
      },
      error: (err: any) => {
        console.error('Error fetching players', err.error);
      },
    });
  }
}
