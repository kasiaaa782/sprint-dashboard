export interface Project {
  uuid: string;
  title: string;
  sprints: Sprint[];
}

export interface Sprint {
  uuid: string;
  number: number;
  startDate: string;
  endDate: string;
  isReleased: boolean;
  daysToEnd?: number;
}
