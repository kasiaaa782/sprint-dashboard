import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SprintService } from 'src/core/data/sprint.service';

import { ModalContext, ModalType } from 'src/core/interfaces/interfaces';
import { SprintFormComponent } from './sprint-form/sprint-form.component';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss']
})
export class DashboardModalComponent implements OnInit {
  @Input() modalContext: ModalContext;

  @ViewChild(SprintFormComponent) sprintFormComponent: SprintFormComponent;

  ModalType = ModalType;

  readonly VALIDATION_INFORMATION = 'Uzupełnij wszystkie pola.';

  constructor(private sprintService: SprintService) {}

  ngOnInit(): void {}

  add(): void {
    if (this.modalContext.sprintRequest) {
      if (this.sprintFormComponent.sprintForm.valid) {
        this.sprintService
          .createSprint(this.sprintFormComponent.getSprintRequest())
          .subscribe((sprint) => {
            console.log(
              'Utworzono sprint o przykładowym numerze ',
              sprint.number
            );
          });
      } else {
        alert(this.VALIDATION_INFORMATION);
      }
    }
    this.closeModal();
    this.resetForm();
  }

  edit(): void {
    if (this.modalContext.sprintUpdate) {
      if (this.sprintFormComponent.sprintForm.valid) {
        this.sprintService
          .updateSprint(
            this.modalContext.sprintUpdate.uuid,
            this.sprintFormComponent.getSprintRequest()
          )
          .subscribe((sprint) => {
            console.log(
              'Zaktualizowano sprint o przykładowym numerze ',
              sprint.number
            );
          });
      } else {
        alert(this.VALIDATION_INFORMATION);
      }
    }
    this.resetForm();
    this.closeModal();
  }

  resetForm(): void {
    this.sprintFormComponent.sprintForm.reset();
  }

  closeModal(): void {
    let ref = document.getElementById('cancel');
    ref?.click();
  }
}
