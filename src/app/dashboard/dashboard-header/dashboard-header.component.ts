import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ModalContext, ModalType } from 'src/core/interfaces/interfaces';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  @Output() setModalContextEvent = new EventEmitter<ModalContext>();

  constructor() {}

  ngOnInit(): void {}

  addProject(): void {
    this.setModalContextEvent.emit({
      type: ModalType.ADD,
      title: 'Dodaj projekt'
    });
  }
}
