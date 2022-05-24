export interface Project {
  uuid: string;
  title: string;
  sprints: Sprint[];
}

export interface ProjectRequest {
  title: string;
  sprints: Sprint[];
}

export interface Sprint {
  uuid: string;
  projectUuid: string;
  number: number;
  startDate: string;
  endDate: string;
  isReleased: boolean;
  daysToEnd?: number;
}

export interface SprintRequest {
  projectUuid: string;
  number: number;
  startDate: string;
  endDate: string;
  isReleased: boolean;
  daysToEnd?: number;
}

export enum ModalType {
  ADD,
  EDIT,
  DELETE
}

export interface ModalContext {
  type: ModalType;
  title: string;
  text?: string;
  sprintRequest?: SprintRequest;
  sprintUpdate?: Sprint;
  projectRequest?: ProjectRequest;
  projectUpdate?: Project;
}
