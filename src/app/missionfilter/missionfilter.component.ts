import { Component } from '@angular/core';
import { SpacexService } from '../services/spacex.service';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  launchYear: string = '';
  missions: any[] = [];

  constructor(private spacexService: SpacexService) {}

  filterMissions() {
    this.spacexService.getLaunchesByYear(this.launchYear).subscribe((data) => {
      this.missions = data;
    });
  }
}
