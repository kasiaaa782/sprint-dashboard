import { Component, OnInit, Output } from '@angular/core';

import { ProjectService } from 'src/core/data/project.service';
import {
  ModalContext,
  ModalType,
  Project
} from 'src/core/interfaces/interfaces';
import { EventEmitter } from '@angular/core';
import { SprintService } from 'src/core/data/sprint.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Output() setModalContextEvent = new EventEmitter<ModalContext>();

  projectList: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private sprintService: SprintService
  ) {}

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe((list) => {
      this.projectList = list;
    });

    this.projectList.forEach((proj) => {
      proj.sprints = proj.sprints.map((value) => {
        return {
          ...value,
          daysToEnd: this.getDaysToEnd(new Date(value.endDate))
        };
      });
      proj.sprints.reverse();
    });
  }

  addSprint(): void {
    this.setModalContextEvent.emit({
      type: ModalType.ADD,
      title: 'Dodaj sprint'
    });
  }

  editSprint(uuid: string): void {
    this.setModalContextEvent.emit({
      type: ModalType.EDIT,
      title: 'Edytuj sprint'
    });
  }

  deleteSprint(uuid: string): void {
    this.sprintService.deleteSprint(uuid).subscribe({
      next: () => {
        this.setModalContextEvent.emit({
          type: ModalType.DELETE,
          title: 'Usunięto sprint'
        });
      }
    });
  }

  editProject(uuid: string): void {
    this.setModalContextEvent.emit({
      type: ModalType.EDIT,
      title: 'Edytuj projekt'
    });
  }

  deleteProject(uuid: string): void {
    this.projectService.deleteProject(uuid).subscribe();
  }

  private getDaysToEnd(endDate: Date): number {
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const daysAmount = Math.floor(
      (endDate.getTime() - new Date().getTime()) / dayInMilliseconds
    );
    return daysAmount > 0 ? daysAmount : 0;
  }
}
