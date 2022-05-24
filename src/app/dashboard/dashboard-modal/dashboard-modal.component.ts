import { Component, Input, ViewChild } from '@angular/core';
import { ProjectService } from 'src/core/data/project.service';
import { SprintService } from 'src/core/data/sprint.service';

import { ModalContext, ModalType } from 'src/core/interfaces/interfaces';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SprintFormComponent } from './sprint-form/sprint-form.component';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss']
})
export class DashboardModalComponent {
  @Input() modalContext: ModalContext;

  @ViewChild(SprintFormComponent) sprintFormComponent: SprintFormComponent;

  @ViewChild(ProjectFormComponent) projectFormComponent: ProjectFormComponent;

  ModalType = ModalType;

  readonly VALIDATION_INFORMATION = 'Uzupełnij wszystkie pola.';

  constructor(
    private sprintService: SprintService,
    private projectService: ProjectService
  ) {}

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
        this.closeModal();
        this.resetSprintForm();
      } else {
        alert(this.VALIDATION_INFORMATION);
      }
    }
    if (this.modalContext.projectRequest) {
      if (this.projectFormComponent.projectForm.valid) {
        this.projectService
          .createProject(this.projectFormComponent.getProjectRequest())
          .subscribe((project) => {
            console.log(
              'Utworzono projekt o przykładowym tytule ',
              project.title
            );
          });
        this.closeModal();
        this.resetProjectForm();
      } else {
        alert(this.VALIDATION_INFORMATION);
      }
    }
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
      this.closeModal();
      this.resetSprintForm();
    }
    if (this.modalContext.projectUpdate) {
      if (this.projectFormComponent.projectForm.valid) {
        this.projectService
          .updateProject(
            this.modalContext.projectUpdate.uuid,
            this.projectFormComponent.getProjectRequest()
          )
          .subscribe((project) => {
            console.log(
              'Zaktualizowano projekt o przykładowej nazwie ',
              project.title
            );
          });
      } else {
        alert(this.VALIDATION_INFORMATION);
      }
      this.closeModal();
      this.resetProjectForm();
    }
  }

  resetSprintForm(): void {
    this.sprintFormComponent.sprintForm.reset();
  }

  resetProjectForm(): void {
    this.projectFormComponent.projectForm.reset();
  }

  resetForms(): void {
    if (this.sprintFormComponent) this.resetSprintForm();
    if (this.projectFormComponent) this.resetProjectForm();
  }

  closeModal(): void {
    let ref = document.getElementById('cancel');
    ref?.click();
  }
}
