import { Component, OnInit } from '@angular/core';
// Service
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countries: any[] = [];
  isLoading = true;

  // add service as provider "constructor argument"
  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countriesService.getCountries().subscribe(
      (countries) => {
        this.countries = countries;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onChangeRegion(region) {
    let apiUrl = '';
    if (region === 'all') {
      apiUrl = 'https://restcountries.com/v2/all';
    } else {
      apiUrl = `https://restcountries.com/v2/continent/${region}`;
    }

    this.countriesService.setApiUrl(apiUrl);

    this.isLoading = true;
    this.getCountries();
  }
}
