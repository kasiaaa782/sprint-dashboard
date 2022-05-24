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

  getProjectById(uuid: string): Observable<Project> {
    return of({
      uuid: '4736d974-d886-11ec-9d64-0242ac120001',
      title: 'Nowy projekt',
      sprints: [
        {
          uuid: '4736d974-d886-11ec-9d64-0242ac120003',
          projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
          startDate: '2022-05-02',
          endDate: '2022-05-13',
          number: 1,
          isReleased: true
        },
        {
          uuid: '4736d974-d886-11ec-9d64-0242ac120004',
          projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
          startDate: '2022-05-16',
          endDate: '2022-05-27',
          number: 2,
          isReleased: false
        },
        {
          uuid: '4736d974-d886-11ec-9d64-0242ac1200025',
          projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
          startDate: '2022-05-30',
          endDate: '2022-06-08',
          number: 3,
          isReleased: false
        }
      ]
    });
  }

  createProject(request: ProjectRequest): Observable<Project> {
    return of({
      uuid: '99890a78-9623-4dc9-a0f0-32fa9b8e642b',
      title: 'Nowy projekt',
      sprints: []
    });
  }

  updateProject(uuid: string, request: ProjectRequest): Observable<Project> {
    return of({
      uuid: '99890a78-9623-4dc9-a0f0-32fa9b8e642b',
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
