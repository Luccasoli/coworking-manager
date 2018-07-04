import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarAdministradorComponent } from './cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarItensDeConsumoComponent } from './cadastrar-itens-de-consumo/cadastrar-itens-de-consumo.component';
import { CadastrarItensDeServicoComponent } from './cadastrar-itens-de-servico/cadastrar-itens-de-servico.component';
import { CadastrarPlanoComponent } from './cadastrar-plano/cadastrar-plano.component';
import { CadastrarSalaDeReuniaoComponent } from './cadastrar-sala-de-reuniao/cadastrar-sala-de-reuniao.component';
import { CadastrarSalaDeTreinamentoComponent } from './cadastrar-sala-de-treinamento/cadastrar-sala-de-treinamento.component';
import { CadastrarSalaExclusivaComponent } from './cadastrar-sala-exclusiva/cadastrar-sala-exclusiva.component';
import { MenuSalasComponent } from './menu-salas/menu-salas.component';
import { MenuCadastroComponent } from './menu-cadastro/menu-cadastro.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { ListarItensDeConsumoComponent } from './listar-itens-de-consumo/listar-itens-de-consumo.component';
import { ListarItensDeServicoComponent } from './listar-itens-de-servico/listar-itens-de-servico.component';

const routes: Routes = [
  {path: 'admin/salas', component: MenuSalasComponent},
  {path: 'admin/home', component: MenuCadastroComponent},
  {path: 'admin/info', component: MenuInfoComponent},
  {path: 'admin/home/cadastrar-administrador', component: CadastrarAdministradorComponent},
  {path: 'admin/home/cadastrar-itens-de-consumo', component: CadastrarItensDeConsumoComponent},
  {path: 'admin/home/cadastrar-itens-de-servico', component: CadastrarItensDeServicoComponent},
  {path: 'admin/home/cadastrar-plano', component: CadastrarPlanoComponent},
  {path: 'admin/home/cadastrar-sala-de-reuniao', component: CadastrarSalaDeReuniaoComponent},
  {path: 'admin/home/cadastrar-sala-de-treinamento', component: CadastrarSalaDeTreinamentoComponent},
  {path: 'admin/home/cadastrar-sala-exclusiva', component: CadastrarSalaExclusivaComponent},
  {path: 'admin/home/cadastrar-itens-de-consumo/listar-itens-de-consumo', component: ListarItensDeConsumoComponent},
  {path: 'admin/home/cadastrar-itens-de-servico/listar-itens-de-servico', component: ListarItensDeServicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
