import { Component, OnInit } from '@angular/core';
import { ILista } from './lista';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'Exercise of Angular';

  datos: ILista[] = [

    {
      "consumerId": 15191, 
      "firstName": "Steve", 
      "lastName": "Macintosh", 
      "dateOfBirth": "1999-05-01", 
      "status": "enrollprscd",  
      "members": ["Benedict Lumbertatch", "Jason Seagull"]
},
  {            
      "consumerId": 15391, 
      "firstName": "Bruce", 
      "lastName": "McLaren", 
      "dateOfBirth": "1940-06-05", 
      "status": "enrolldcln",  
      "members": ["Mika Häkkinen", "Ayrton Senna"]
},
  {
      "consumerId": 15897, 
      "firstName": "Dwight", 
      "lastName": "Eisenhower", 
      "dateOfBirth": "1960-02-01", 
      "status": "enrollrvw",  
      "members": [""]

  },
  {
      "consumerId": 15899, 
      "firstName": "Jon", 
      "lastName": "Snow", 
      "dateOfBirth": "1990-04-05", 
      "status": "enrollprscd",  
      "members": ["Ygritte"]

  },
  {
      "consumerId": 15812, 
      "firstName": "Ash", 
      "lastName": "ketchum", 
      "dateOfBirth": "1994-06-04", 
      "status": "enrollprscd",  
      "members": [""]

  }

  ]

  ngOnInit() : void {
    this.datos.forEach( dato => {
      dato.firstName = dato.firstName.toString().toUpperCase();
    })
  }
  
}
