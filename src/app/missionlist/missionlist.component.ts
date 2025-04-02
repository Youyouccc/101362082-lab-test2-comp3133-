import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe((data) => {
      this.missions = data;
    });
  }
}
