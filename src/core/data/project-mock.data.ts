import { Project } from '../interfaces/interfaces';

export const projectListMock: Project[] = [
  {
    uuid: '4736d974-d886-11ec-9d64-0242ac120001',
    title: 'Dragon',
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
  },
  {
    uuid: '4736db72-d886-11ec-9d64-0242ac120002',
    title: 'Load&GO!',
    sprints: [
      {
        uuid: '4736d974-d886-11ec-9d64-0242ac120002',
        projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
        startDate: '2022-03-04',
        endDate: '2022-03-18',
        number: 1,
        isReleased: true
      },
      {
        uuid: '4736d974-d886-11ec-9d64-0242ac120002',
        projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
        startDate: '2022-03-21',
        endDate: '2022-04-04',
        number: 2,
        isReleased: true
      }
    ]
  },
  {
    uuid: '4736dc9e-d886-11ec-9d64-0242ac120002',
    title: 'DONE! Space',
    sprints: [
      {
        uuid: '4736d974-d886-11ec-9d64-0242ac120002',
        projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
        startDate: '2022-01-03',
        endDate: '2022-01-14',
        number: 1,
        isReleased: true
      },
      {
        uuid: '4736d974-d886-11ec-9d64-0242ac120002',
        projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
        startDate: '2022-01-17',
        endDate: '2022-01-28',
        number: 2,
        isReleased: true
      },
      {
        uuid: '4736d974-d886-11ec-9d64-0242ac120002',
        projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
        startDate: '2022-01-31',
        endDate: '2022-02-11',
        number: 3,
        isReleased: false
      },
      {
        uuid: '4736d974-d886-11ec-9d64-0242ac120002',
        projectUuid: '4736d974-d886-11ec-9d64-0242ac120002',
        startDate: '2022-02-14',
        endDate: '2022-02-25',
        number: 4,
        isReleased: false
      }
    ]
  },
  {
    uuid: '4736ddca-d886-11ec-9d64-0242ac120002',
    title: 'Wall-Do',
    sprints: []
  }
];
