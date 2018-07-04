import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CadastrarAdministradorComponent } from './cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarItensDeConsumoComponent } from './cadastrar-itens-de-consumo/cadastrar-itens-de-consumo.component';
import { CadastrarItensDeServicoComponent } from './cadastrar-itens-de-servico/cadastrar-itens-de-servico.component';
import { CadastrarPlanoComponent } from './cadastrar-plano/cadastrar-plano.component';
import { CadastrarSalaDeReuniaoComponent } from './cadastrar-sala-de-reuniao/cadastrar-sala-de-reuniao.component';
import { CadastrarSalaDeTreinamentoComponent } from './cadastrar-sala-de-treinamento/cadastrar-sala-de-treinamento.component';
import { CadastrarSalaExclusivaComponent } from './cadastrar-sala-exclusiva/cadastrar-sala-exclusiva.component';
import { MenuCadastroComponent } from './menu-cadastro/menu-cadastro.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { MenuSalasComponent } from './menu-salas/menu-salas.component';
import { ListarItensDeConsumoComponent } from './listar-itens-de-consumo/listar-itens-de-consumo.component';
import { ListarItensDeServicoComponent } from './listar-itens-de-servico/listar-itens-de-servico.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [CadastrarAdministradorComponent, CadastrarItensDeConsumoComponent, CadastrarItensDeServicoComponent, CadastrarPlanoComponent, CadastrarSalaDeReuniaoComponent, CadastrarSalaDeTreinamentoComponent, CadastrarSalaExclusivaComponent, MenuCadastroComponent, MenuInfoComponent, MenuSalasComponent, ListarItensDeConsumoComponent, ListarItensDeServicoComponent, NavBarAdminComponent]
})
export class AdminModule { }
