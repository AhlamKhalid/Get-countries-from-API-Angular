import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  // to emit from child to parent
  @Output() changeRegion = new EventEmitter();

  region = 'all';

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    console.log(this.region);

    this.changeRegion.emit(this.region);
  }
}
