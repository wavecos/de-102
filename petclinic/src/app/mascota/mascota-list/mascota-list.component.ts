import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../model/Mascota';
import { MascotaService } from '../../services/MascotaService';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  mascotas: Mascota[];

  constructor(private mascotaService: MascotaService) {

  }

  ngOnInit() {
    this.mascotas = this.mascotaService.getMascotas()
    // console.log('ngOnInit');
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestory');
  // }
}
