import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertir-moneda',
  templateUrl: './convertir-moneda.component.html',
  styleUrls: ['./convertir-moneda.component.css']
})
export class ConvertirMonedaComponent implements OnInit {

  moneda: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
