import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Knit } from '../models/knit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnitService {



constructor(private http: HttpClient) {}


getAllKnit(): Observable<Knit[]>{
  return this.http.get<Knit[]>('http://localhost:3000/api/knits');
}

/*getAllKnit() : Knit[] {
  return this.knits;
  }*/
}
