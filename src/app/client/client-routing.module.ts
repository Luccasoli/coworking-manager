import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaturasComponent } from './faturas/faturas.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { FaturasPassadasComponent } from './faturas-passadas/faturas-passadas.component';
import { PlanosComponent } from './planos/planos.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';

const routes: Routes = [
  {path: 'client/home', component: HomeComponent},
  {path: 'client/fatura', component: FaturasComponent},
  {path: 'client/fatura/passadas', component: FaturasPassadasComponent},
  {path: 'client/meus-dados', component: MeusDadosComponent},
  {path: 'client/planos', component: PlanosComponent},
  {path: 'agendamentos', component: AgendamentosComponent, outlet: 'clientScreen'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
