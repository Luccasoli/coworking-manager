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
import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { HistoricoAgendamentoComponent } from './historico-agendamento/historico-agendamento.component';
import { NovoAgendamentoExclusivaComponent } from './novo-agendamento-exclusiva/novo-agendamento-exclusiva.component';
import { NovoAgendamentoTreinamentoComponent } from './novo-agendamento-treinamento/novo-agendamento-treinamento.component';
import { NovoAgendamentoReuniaoComponent } from './novo-agendamento-reuniao/novo-agendamento-reuniao.component';
import { NovoMateriaisDeConsumoComponent } from './novo-materiais-de-consumo/novo-materiais-de-consumo.component';
import { HistoricoMateriaisDeConsumoComponent } from './historico-materiais-de-consumo/historico-materiais-de-consumo.component';

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
            outlet: 'A',
            path: 'novo-agendamento',
            component: NovoAgendamentoComponent,
            children: [
              {
                outlet: 'novo-ag',
                path: 'novo-agendamento-exclusiva',
                component: NovoAgendamentoExclusivaComponent,
              },
              {
                outlet: 'novo-ag',
                path: 'novo-agendamento-treinamento',
                component: NovoAgendamentoTreinamentoComponent,
              },
              {
                outlet: 'novo-ag',
                path: 'novo-agendamento-reuniao',
                component: NovoAgendamentoReuniaoComponent,
              },
            ]
          },
          {
            outlet: 'A',
            path: 'historico-agendamento',
            component: HistoricoAgendamentoComponent,
          },
          {
            outlet: 'B',
            path: 'materiais-de-consumo',
            component: MateriaisDeConsumoComponent,
          },
          {
            outlet: 'B',
            path: 'novo-materiais-de-consumo',
            component: NovoMateriaisDeConsumoComponent,
          },
          {
            outlet: 'B',
            path: 'historico-materiais-de-consumo',
            component: HistoricoMateriaisDeConsumoComponent,
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
