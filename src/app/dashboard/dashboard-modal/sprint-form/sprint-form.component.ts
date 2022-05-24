import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProjectService } from 'src/core/data/project.service';
import { Project, Sprint, SprintRequest } from 'src/core/interfaces/interfaces';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.scss']
})
export class SprintFormComponent implements OnChanges {
  @Input() projectUuid: string;

  @Input() sprintToUpdate?: Sprint | null;

  sprintForm = new FormGroup({
    number: new FormControl(
      { value: null, disabled: true },
      Validators.required
    ),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)
  });

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    if (this.sprintToUpdate) {
      this.sprintForm.patchValue({
        number: this.sprintToUpdate.number,
        startDate: this.sprintToUpdate.startDate,
        endDate: this.sprintToUpdate.endDate
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.sprintToUpdate) {
      this.setSprintNumber(changes['projectUuid'].currentValue);
    }
  }

  getSprintRequest(): SprintRequest {
    return {
      projectUuid: this.projectUuid,
      number: this.sprintForm.controls['number'].value,
      startDate: this.sprintForm.controls['startDate'].value,
      endDate: this.sprintForm.controls['endDate'].value,
      isReleased: false
    };
  }

  private setSprintNumber(project: Project): void {
    this.projectService
      .getProjectById(this.projectUuid)
      .subscribe((project) => {
        let number = 1;
        project.sprints.forEach((sprint) => {
          if (sprint.number > number) {
            number = sprint.number;
          }
        });
        this.sprintForm.controls['number'].setValue(number + 1);
      });
  }
}
