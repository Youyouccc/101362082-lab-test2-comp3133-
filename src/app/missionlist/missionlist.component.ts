import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { SpacexService } from '../services/spacex.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  isLoading = true;

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.spacexService.getAllMissions().subscribe({
      next: (missions) => {
        this.missions = missions;
        this.filteredMissions = missions;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching missions:', err);
        this.isLoading = false;
      }
    });
  }

  // Safe accessor methods
  getMissionPatch(mission: Mission): string {
    return mission.links?.mission_patch_small || '';
  }

  getMissionName(mission: Mission): string {
    return mission.mission_name || 'Unknown Mission';
  }

  getRocketName(mission: Mission): string {
    return mission.rocket?.rocket_name || 'Unknown Rocket';
  }

  getRocketType(mission: Mission): string {
    return mission.rocket?.rocket_type || 'Unknown Type';
  }

  getArticleLink(mission: Mission): string {
    return mission.links?.article_link || '#';
  }

  getWikipediaLink(mission: Mission): string {
    return mission.links?.wikipedia || '#';
  }

  getVideoLink(mission: Mission): string {
    return mission.links?.video_link || '#';
  }

  filterMissions(year: string | null): void {
    if (!year) {
      this.filteredMissions = this.missions;
      return;
    }
    
    this.isLoading = true;
    this.spacexService.getMissionsByYear(year).subscribe({
      next: (missions) => {
        this.filteredMissions = missions;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error filtering missions:', err);
        this.isLoading = false;
      }
    });
  }
}