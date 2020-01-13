
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {


  // map: google.maps.Map;
  title = 'resolveProject';



  allNumbers: number[] = [];


  constructor() {
    // for (let insertNumbers = 0; insertNumbers <= 100; insertNumbers++) {
    //   this.allNumbers.push(insertNumbers);
    // }
  }
  Scrolldown() {
    window.scroll(0, 300);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.onload = this.Scrolldown;
  }
}
