export interface Project {
  uuid: string;
  title: string;
  sprints: Sprint[];
}

export interface Sprint {
  startDate: string;
  endDate: string;
  number: number;
  isReleased: boolean;
}
