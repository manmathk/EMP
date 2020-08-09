import { Component, OnInit } from '@angular/core';
import { EmpUtilityService } from 'src/app/services/emp-utility.service';

@Component({
  selector: 'app-shout-out-template',
  templateUrl: './shout-out-template.component.html',
  styleUrls: ['./shout-out-template.component.scss']
})
export class ShoutOutTemplateComponent implements OnInit {

  constructor(public empUtilityService: EmpUtilityService) { }

  ngOnInit(): void {
  }

}
