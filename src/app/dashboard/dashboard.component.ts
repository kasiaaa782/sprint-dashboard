import { Component, OnInit } from '@angular/core';

import { ModalContext } from 'src/core/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  modalContext: ModalContext;

  constructor() {}

  ngOnInit(): void {}

  setModalContext(modalContext: ModalContext): void {
    this.modalContext = modalContext;
  }
}
