import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openAgendamentos() {
    this.router.navigateByUrl('/client/home/(A:agendamentos)');
  }

  openMatConsumo() {
    this.router.navigateByUrl('/client/home/(B:materiais-de-consumo)');
  }

  openItensServico() {
    this.router.navigateByUrl('/client/home/(C:itens-de-servico)');
  }

  openChat() {
    this.router.navigateByUrl('/client/home/(D:contato-via-chat)');
  }

}
