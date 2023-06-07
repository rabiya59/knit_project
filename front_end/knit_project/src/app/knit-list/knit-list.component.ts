import { Component, OnInit } from '@angular/core';
import { Knit } from '../models/knit';
import { Observable } from 'rxjs';
import { KnitService } from '../services/knit.service';

@Component({
  selector: 'app-knit-list',
  templateUrl: './knit-list.component.html',
  styleUrls: ['./knit-list.component.css']
})
export class KnitListComponent implements OnInit {
  //knitList : Knit[] = KNIT;
 // KnitSelected!: Knit|undefined;
  // version observable
  //knits! : Knit[]

  knitList$!: Observable<Knit[]>;

  constructor(private knitService: KnitService){}
  // on accède au service via la propriété knitService


  ngOnInit() {
    //console.table(this.knitList)
    this.knitList$ = this.knitService.getAllKnit();
  }
}

