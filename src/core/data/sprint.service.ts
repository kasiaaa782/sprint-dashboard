import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

import { Sprint, SprintRequest } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  createSprint(
    projectUuid: string,
    request: SprintRequest
  ): Observable<Sprint> {
    return of({
      uuid: '00000',
      projectUuid: '00000',
      number: 0,
      startDate: '2222-22-22',
      endDate: '2222-22-22',
      isReleased: false
    });
  }

  updateSprint(uuid: string, request: SprintRequest): Observable<Sprint> {
    return of({
      uuid: '00000',
      projectUuid: '00000',
      number: 0,
      startDate: '2222-22-22',
      endDate: '2222-22-22',
      isReleased: false
    });
  }

  deleteSprint(uuid: string): Observable<void> {
    return this.getVoidObservable();
  }

  private getVoidObservable(): Observable<void> {
    return new Observable((observer: Subscriber<void>) => {
      observer.next();
      observer.complete();
    });
  }
}
