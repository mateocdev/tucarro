import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculo.interface';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent implements OnInit {
  public vehiculos: Vehiculo[] = [];
  constructor(private vehiculosService: VehiculosService) {}
  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }
}
