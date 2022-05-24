import { Component, Input, OnInit } from '@angular/core';

import { ModalContext, ModalType } from 'src/core/interfaces/interfaces';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss']
})
export class DashboardModalComponent implements OnInit {
  @Input() modalContext: ModalContext;

  ModalType = ModalType;

  constructor() {}

  ngOnInit(): void {}
}
