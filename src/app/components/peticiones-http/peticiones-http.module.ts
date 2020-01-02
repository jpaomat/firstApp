import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticionesHttpRoutingModule } from './peticiones-http-routing.module';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { HttpClientModule } from '@angular/common/http';
import { GetListComponent } from './get-list/get-list.component'


@NgModule({
  declarations: [PeticionesComponent, GetListComponent],
  imports: [
    CommonModule,