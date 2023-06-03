import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{

  interval$! : Observable<number>
 

  ngOnInit(){
    // tous les observables finis par dollars
    // this.interval$ = interval(1000);    
  }
 

}
     