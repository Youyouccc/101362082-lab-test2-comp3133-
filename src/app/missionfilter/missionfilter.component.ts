import { Component, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string | null>();
  years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  selectedYear: string | null = null;

  onYearSelect(year: string): void {
    this.selectedYear = year;
    this.yearSelected.emit(year);
  }

  clearFilter(): void {
    this.selectedYear = null;
    this.yearSelected.emit('null');
  }
}