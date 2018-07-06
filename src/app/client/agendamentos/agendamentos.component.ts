import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openNovoAgendamento() {
    this.router.navigateByUrl('/client/home/(A:novo-agendamento)');
  }

}
