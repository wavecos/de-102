import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-app onix';

  empleados = [
    {
      nombre: "Rene Flores",
      altura: 1.2,
      peso: 56,
      esMujer: false 
    },
    {
      nombre: "Ana Martinez",
      altura: 1.7,
      peso: 63,
      esMujer: true 
    },
    {
      nombre: "Joe Ramone",
      altura: 1.8,
      peso: 75,
      esMujer: false 
    },
    {
      nombre: "Maria de la Riva",
      altura: 1.6,
      peso: 65,
      esMujer: true 
    }
  ];


}
