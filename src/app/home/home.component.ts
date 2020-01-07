import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselOptions = {
    loop: true,
    margin: 25,
    nav: true,
    navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class=\'nav-btn next-slide\'></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };

  images = [
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/travel.jpeg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/travel1.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'assets/images/travel2.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/images/travel3.png'
    },
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/travel4.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/travel5.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'assets/images/travel6.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/images/travel7.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
