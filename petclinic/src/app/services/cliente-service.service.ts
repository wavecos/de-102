import { Injectable } from '@angular/core';
import { MascotaService } from './MascotaService';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private mascotaService: MascotaService) { }
}
