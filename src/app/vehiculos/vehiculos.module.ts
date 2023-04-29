import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { VehiculosRoutingModule } from './vehiculos-routing.module';

@NgModule({
  declarations: [LayoutPageComponent],
  imports: [CommonModule, VehiculosRoutingModule],
})
export class VehiculosModule {}
