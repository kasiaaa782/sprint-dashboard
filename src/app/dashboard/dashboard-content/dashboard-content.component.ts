import { Component, OnInit } from '@angular/core';

import { projectList } from 'src/core/data/project-mock.data';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  projectList = projectList;

  constructor() {}

  ngOnInit(): void {
    this.projectList.forEach((proj) => {
      proj.sprints = proj.sprints.map((value) => {
        return {
          ...value,
          daysToEnd: this.getDaysToEnd(new Date(value.endDate))
        };
      });
    });
  }

  getDaysToEnd(endDate: Date): number {
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const daysAmount = Math.floor(
      (endDate.getTime() - new Date().getTime()) / dayInMilliseconds
    );
    return daysAmount > 0 ? daysAmount : 0;
  }

  addSprint(): void {
    //TODO
  }

  editSprint(uuid: string): void {
    //TODO
  }

  deleteSprint(uuid: string): void {
    //TODO
  }

  editProject(uuid: string): void {
    //TODO
  }

  deleteProject(uuid: string): void {
    //TODO
  }
}
