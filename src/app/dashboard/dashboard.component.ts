import { Component } from '@angular/core';

import { ModalContext } from 'src/core/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  modalContext: ModalContext;

  setModalContext(modalContext: ModalContext): void {
    this.modalContext = modalContext;
  }
}
