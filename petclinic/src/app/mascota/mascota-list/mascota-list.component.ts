import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../model/Mascota';
import { MascotaService } from '../../services/MascotaService';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/model/Respuesta';
import { flatMap } from 'rxjs/operators';

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
    this.cargasMascotas();
    console.log('ngOnInit');
  }

  cargasMascotas() {
    this.mascotaService.getMascotas()
      .subscribe((mascotas) => {
        console.log(mascotas);
        this.mascotas = mascotas;
      });
  }

  irNuevaMascota() {
    this.router.navigate(['/nueva-mascota']);
  }

  eliminarMascota(id: string) {
    this.mascotaService.eliminarMascota(id)
      .subscribe((respuesta: Respuesta) => {
        console.log("se ha eliminado la mascota");
        this.cargasMascotas();
      });
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
