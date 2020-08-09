import { Component, OnInit } from '@angular/core';
import { EmpUtilityService } from './../../services/emp-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(public empUtilityService: EmpUtilityService) { }

  ngOnInit(): void {
  }

}
