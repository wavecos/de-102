import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string = "S/N";
  @Input() height: number = 0.0;
  @Input() weight: number = 0.0;
  @Input() female: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  convertirAMayusculas() {
    console.log('hiciste un click');
    this.name = this.name.toUpperCase();
    this.height = 100;
  }

  borrarNombre() {
    this.name = 'a borrar';
  }
 
}
