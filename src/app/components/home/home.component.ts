import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentList = [
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', plCount: '2' },
    { firstName: 'Rough', lastName: 'Strong', src: 'assets/images/GD.jpg', plCount: '3' },
    { firstName: 'Lanna', lastName: 'Neil', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', plCount: '40' },
    { firstName: 'Sanna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', plCount: '5' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', plCount: '10' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
