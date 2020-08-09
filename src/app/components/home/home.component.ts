import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentList = [
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/anna-strong.png', plCount: '2' },
    { firstName: 'Rough', lastName: 'Strong', src: 'assets/images/avatars/alice.jpg', plCount: '3' },
    { firstName: 'Lanna', lastName: 'Neil', src: 'assets/images/avatars/Barrera.jpg', plCount: '40' },
    { firstName: 'Sanna', lastName: 'Strong', src: 'assets/images/avatars/Blair.jpg', plCount: '5' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' },
    { firstName: 'Anna', lastName: 'Strong', src: 'assets/images/avatars/Boyle.jpg', plCount: '10' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
