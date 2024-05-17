import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Pinguinos } from './pinguinos';

@Injectable({
  providedIn: 'root'
})
export class PinguinosService {
  private apiUrl = environment.baseUrl 

constructor(private http: HttpClient) { }

getPinguinos(): Observable<Pinguinos[]> {
  return this.http.get<Pinguinos[]>(this.apiUrl);
}

}
