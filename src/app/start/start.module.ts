import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { NavBarStartComponent } from './nav-bar-start/nav-bar-start.component';

@NgModule({
  imports: [
    CommonModule,
    StartRoutingModule
  ],
  declarations: [HomeComponent, SigninComponent, SignupComponent, SobreComponent, ContatoComponent, NavBarStartComponent]
})
export class StartModule { }
