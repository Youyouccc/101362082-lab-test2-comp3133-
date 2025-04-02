import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'] 
})
export class MissiondetailsComponent {
  @Input() mission: Mission | null = null;

  getMissionName(): string {
    return this.mission?.mission_name || 'Unknown Mission';
  }

  getFlightNumber(): string {
    return this.mission?.flight_number?.toString() || 'N/A';
  }

  getLaunchYear(): string {
    return this.mission?.launch_year || 'Unknown Year';
  }

  getMissionPatch(): string {
    return this.mission?.links?.mission_patch_small || '';
  }

  getRocketName(): string {
    return this.mission?.rocket?.rocket_name || 'Unknown Rocket';
  }

  getRocketType(): string {
    return this.mission?.rocket?.rocket_type || 'Unknown Type';
  }

  getDetails(): string {
    return this.mission?.details || 'No details available';
  }

  getArticleLink(): string {
    return this.mission?.links?.article_link || '#';
  }

  getWikipediaLink(): string {
    return this.mission?.links?.wikipedia || '#';
  }

  getVideoLink(): string {
    return this.mission?.links?.video_link || '#';
  }
}