import { Component, OnInit } from '@angular/core';
import { Pinguinos } from '../pinguinos';
import { PinguinosService } from '../pinguinos.service';
import { PinguinosDetail } from '../pinguinosDetail';

@Component({
  selector: 'app-pinguinos-list',
  templateUrl: './pinguinos-list.component.html',
  styleUrls: ['./pinguinos-list.component.css']
})
export class PinguinosListComponent implements OnInit {

  pinguinos: Array<PinguinosDetail> = [];

  constructor(private pinguinosService: PinguinosService) { }

  getPinguinos() {
    this.pinguinosService.getPinguinos().subscribe(pinguinos => {
      this.pinguinos = pinguinos;
    });
  }

  selectedPinguino!: PinguinosDetail;
  selected: Boolean = false;
  onSelected(pinguino: PinguinosDetail): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  ngOnInit() {
    this.getPinguinos();
  }

}
