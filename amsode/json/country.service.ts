import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
    

    constructor(private http: HttpClient) { }
    
    //Mrthode de recuperation de tout les pays
    getCountries() {
    return  this.http.get<any>('/assets/pays-data/countries.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }

    getpays() {
        return this.http.get<any>('/assets/pays-data/pays.json')
          .toPromise()
          .then(res => <any[]>res.data)
          .then(data => { return data; });
        }

     
}