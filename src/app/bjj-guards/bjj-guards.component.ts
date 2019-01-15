import { Component, OnInit } from '@angular/core';
import { Guards } from '../guards';
import { GUARDS } from '../mock-guards';

@Component({
  selector: 'app-bjj-guards',
  templateUrl: './bjj-guards.component.html',
  styleUrls: ['./bjj-guards.component.css']
})
export class BjjGuardsComponent implements OnInit {

  constructor() { }

  guards = GUARDS;

  ngOnInit() {
  }

}
