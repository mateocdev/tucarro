import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { Vehiculo } from '../../interfaces/vehiculo.interface';
import { VehiculosService } from '../../services/vehiculos.service';

import { LayoutPageComponent } from './layout-page.component';

describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;
  let vehiculosServiceStub: Partial<VehiculosService>;

  beforeEach(async () => {
    vehiculosServiceStub = {
      getVehiculos(): Observable<Vehiculo[]> {
        return of([
          {
            id: 1,
            marca: 'Renault',
            linea: 'Kangoo',
            referencia: 'VU Express',
            modelo: 2017,
            kilometraje: 93272,
            color: 'Blanco',
            imagen:
              'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg',
          },
          {
            id: 2,
            marca: 'Chevrolet',
            linea: 'Spark',
            referencia: 'Life',
            modelo: 2018,
            kilometraje: 55926,
            color: 'Plata',
            imagen:
              'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg',
          },
          {
            id: 3,
            marca: 'Chevrolet',
            linea: 'Sail',
            referencia: 'LT Sedan',
            modelo: 2016,
            kilometraje: 94321,
            color: 'Rojo',
            imagen:
              'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png',
          },
        ]);
      },
    };

    await TestBed.configureTestingModule({
      declarations: [LayoutPageComponent],
      imports: [MatTableModule],
      providers: [
        { provide: VehiculosService, useValue: vehiculosServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct data in the table', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4); // Header row + 3 data rows

    const headerCells = tableRows[0].querySelectorAll('th');
    expect(headerCells.length).toBe(4); // There should be 4 columns

    const dataCells = tableRows[1].querySelectorAll('td');
    expect(dataCells.length).toBe(4); // There should be 4 columns

    // Check the data in the first row
    expect(dataCells[0].textContent).toContain('1');
    expect(dataCells[1].textContent).toContain('Renault');
    expect(dataCells[2].textContent).toContain('Kangoo');
    expect(dataCells[3].textContent).toContain('2017');
  });
});
