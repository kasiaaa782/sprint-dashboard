import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

import { Project, ProjectRequest } from '../interfaces/interfaces';
import { projectListMock } from './project-mock.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectListMock = projectListMock;

  getProjectList(): Observable<Project[]> {
    return of(this.projectListMock);
  }

  createProject(request: ProjectRequest): Observable<Project> {
    return of({
      uuid: '00000',
      title: 'Nowy projekt',
      sprints: []
    });
  }

  updateProject(uuid: string, request: ProjectRequest): Observable<Project> {
    return of({
      uuid: '00000',
      title: 'Nowy projekt',
      sprints: []
    });
  }

  deleteProject(uuid: string): Observable<void> {
    return this.getVoidObservable();
  }

  private getVoidObservable(): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });
  }
}
