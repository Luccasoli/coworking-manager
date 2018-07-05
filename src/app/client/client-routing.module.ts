import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaturasComponent } from './faturas/faturas.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { FaturasPassadasComponent } from './faturas-passadas/faturas-passadas.component';
import { PlanosComponent } from './planos/planos.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { MateriaisDeConsumoComponent } from './materiais-de-consumo/materiais-de-consumo.component';
import { ItensDeServicoComponent } from './itens-de-servico/itens-de-servico.component';
import { ContatoViaChatComponent } from './contato-via-chat/contato-via-chat.component';

const routes: Routes = [
  {
    path: 'client',
    children: [
      {
        path: 'home',
        component: HomeComponent,

        children: [
          {
            outlet: 'A',
            path: 'agendamentos',
            component: AgendamentosComponent,
          },
          {
            outlet: 'B',
            path: 'materiais-de-consumo',
            component: MateriaisDeConsumoComponent,
          },
          {
            outlet: 'C',
            path: 'itens-de-servico',
            component: ItensDeServicoComponent,
          },
          {
            outlet: 'D',
            path: 'contato-via-chat',
            component: ContatoViaChatComponent,
          },
        ]
      },
      {
        path: 'fatura',
        component: FaturasComponent
      },
    ]
  },
  { path: 'client/fatura/passadas', component: FaturasPassadasComponent },
  { path: 'client/meus-dados', component: MeusDadosComponent },
  { path: 'client/planos', component: PlanosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
