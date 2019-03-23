import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../model/Mascota';
import { MascotaService } from '../../services/MascotaService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  mascotas: Mascota[];

  constructor(private mascotaService: MascotaService, private router: Router) {

  }

  ngOnInit() {
    this.mascotaService.getMascotas()
      .subscribe((mascotas) => {
        console.log(mascotas);
        this.mascotas = mascotas;
      });
    // console.log('ngOnInit');
  }

  irNuevaMascota() {
    this.router.navigate(['/nueva-mascota']);
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
