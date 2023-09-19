import { Component, OnInit } from '@angular/core';
import { PlayerResponse } from '../interfaces/PlayerResponse';
import { PlayerDataService } from '../service/playerData.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  playerResponse?: PlayerResponse;
  playerName: string = 'LeBron James';

  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit(): void {
    this.searchPlayer();
  }

  searchPlayer() {
    this.getPlayerData();
  }

  private getPlayerData() {
    this.playerDataService.getPlayerResponse(this.playerName).subscribe({
      next: (data: PlayerResponse) => {
        this.playerResponse = data;
      },
      error: (err: any) => {
        console.error('Error fetching players', err.error);
      },
    });
  }
}
