import { Component, Input, OnInit } from '@angular/core';
import { Pinguinos } from '../pinguinos';

@Component({
  selector: 'app-pinguinos-detail',
  templateUrl: './pinguinos-detail.component.html',
  styleUrls: ['./pinguinos-detail.component.css']
})
export class PinguinosDetailComponent implements OnInit {

  @Input() pinguinosDetail!: Pinguinos;

  constructor() { }

  ngOnInit() {
  }

}
