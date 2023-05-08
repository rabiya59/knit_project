import { Component, OnInit } from '@angular/core';
import { Knit } from '../models/knit';
import { KNIT } from '../services/mock-knit-list';


@Component({
  selector: 'app-knit-input-search',
  templateUrl: './knit-input-search.component.html',
  styleUrls: ['./knit-input-search.component.css']
})
export class KnitInputSearchComponent implements OnInit {

  constructor() { }
  knitList : Knit[] = KNIT;
  KnitSelected!: Knit|undefined;


  ngOnInit(): void {
  }
  selectKnit(knitId : string){
    const knit : Knit| undefined= this.knitList.find(knit => knit.id ===  +knitId)
    
    if(knit){
     console.log(`vous avez cliqué sur ${knit.name}`);
     this.KnitSelected = knit;
    }else{
     console.log('not knit find') 
     this.KnitSelected = knit;
    }
   }

}
