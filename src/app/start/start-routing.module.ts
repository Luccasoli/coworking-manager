import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { SignupPfPjComponent } from './signup-pf-pj/signup-pf-pj.component';

const routes: Routes = [
  {
    path: 'start/home',
    component: HomeComponent
  },
  {
    path: 'start/signup',
    component: SignupComponent
  },
  {
    path: 'start/signup-pf-pj',
    component: SignupPfPjComponent
  },
  {
    path: 'start/signin',
    component: SigninComponent
  },
  {
    path: 'start/sobre',
    component: SobreComponent
  },
  {
    path: 'start/contato',
    component: ContatoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
