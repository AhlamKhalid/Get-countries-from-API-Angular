import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  // get data from parent
  @Input() countries: any[];

  constructor() {}

  ngOnInit(): void {}
}
