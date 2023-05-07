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
