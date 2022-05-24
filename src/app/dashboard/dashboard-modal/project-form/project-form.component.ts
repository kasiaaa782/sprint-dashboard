import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Project, ProjectRequest } from 'src/core/interfaces/interfaces';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  @Input() projectToUpdate: Project | null;

  projectForm = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    if (this.projectToUpdate) {
      this.projectForm.patchValue({
        title: this.projectToUpdate.title
      });
    }
  }

  getProjectRequest(): ProjectRequest {
    return {
      title: this.projectForm.controls['title'].value,
      sprints: []
    };
  }
}
