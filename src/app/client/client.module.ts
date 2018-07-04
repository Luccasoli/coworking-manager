import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { NavBarClientComponent } from './nav-bar-client/nav-bar-client.component';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [NavBarClientComponent, HomeComponent, AgendamentosComponent]
})
export class ClientModule { }
