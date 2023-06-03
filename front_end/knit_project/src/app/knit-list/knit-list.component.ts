import { Component, OnInit } from '@angular/core';
import { Knit } from '../models/knit';
import { KNIT } from '../services/mock-knit-list';

@Component({
  selector: 'app-knit-list',
  templateUrl: './knit-list.component.html',
  styleUrls: ['./knit-list.component.css']
})
export class KnitListComponent implements OnInit {
  knitList : Knit[] = KNIT;
  KnitSelected!: Knit|undefined;


  ngOnInit() {
    console.table(this.knitList)
  }
}
