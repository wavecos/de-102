import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() mayusculasEvent = new EventEmitter();

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
    // Emitiendo el evento
    this.mayusculasEvent.emit();
  }

  borrarNombre() {
    this.name = 'a borrar';
  }
 
}
