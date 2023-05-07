import { Component, OnInit } from '@angular/core';
import { Knit } from './knit';
import { KNIT } from './mock-knit-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  knitList : Knit[] = KNIT;
  KnitSelected!: Knit|undefined;
  


  ngOnInit(){
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
