import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { NavBarClientComponent } from './nav-bar-client/nav-bar-client.component';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { FaturasComponent } from './faturas/faturas.component';
import { PlanosComponent } from './planos/planos.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { FaturasPassadasComponent } from './faturas-passadas/faturas-passadas.component';
import { MateriaisDeConsumoComponent } from './materiais-de-consumo/materiais-de-consumo.component';
import { ItensDeServicoComponent } from './itens-de-servico/itens-de-servico.component';
import { ContatoViaChatComponent } from './contato-via-chat/contato-via-chat.component';
import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { FooterClientComponent } from './footer-client/footer-client.component';
import { HistoricoAgendamentoComponent } from './historico-agendamento/historico-agendamento.component';
import { NovoAgendamentoReuniaoComponent } from './novo-agendamento-reuniao/novo-agendamento-reuniao.component';
import { NovoAgendamentoExclusivaComponent } from './novo-agendamento-exclusiva/novo-agendamento-exclusiva.component';
import { NovoAgendamentoTreinamentoComponent } from './novo-agendamento-treinamento/novo-agendamento-treinamento.component';
import { NovoMateriaisDeConsumoComponent } from './novo-materiais-de-consumo/novo-materiais-de-consumo.component';
import { HistoricoMateriaisDeConsumoComponent } from './historico-materiais-de-consumo/historico-materiais-de-consumo.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [NavBarClientComponent, HomeComponent, AgendamentosComponent, FaturasComponent, PlanosComponent, MeusDadosComponent, FaturasPassadasComponent, MateriaisDeConsumoComponent, ItensDeServicoComponent, ContatoViaChatComponent, NovoAgendamentoComponent, FooterClientComponent, HistoricoAgendamentoComponent, NovoAgendamentoReuniaoComponent, NovoAgendamentoExclusivaComponent, NovoAgendamentoTreinamentoComponent, NovoMateriaisDeConsumoComponent, HistoricoMateriaisDeConsumoComponent]
})
export class ClientModule { }
