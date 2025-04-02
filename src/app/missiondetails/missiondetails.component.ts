import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../services/spacex.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private spacexService: SpacexService) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id');

    if (flightNumber) {
      this.spacexService.getMissionDetails(flightNumber).subscribe((data) => {
        this.mission = data;
      });
    } else {
      console.error('Invalid flight number');
    }
  }
}
