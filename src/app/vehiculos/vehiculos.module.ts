import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { VehiculosRoutingModule } from './vehiculos-routing.module';

@NgModule({
  declarations: [LayoutPageComponent],
  imports: [CommonModule, VehiculosRoutingModule, MatTableModule],
})
export class VehiculosModule {}
