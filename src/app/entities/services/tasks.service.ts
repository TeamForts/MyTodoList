import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task.interface';
import {Participant} from '../interfaces/participant.interface';

@Injectable()
export class ServiceTasks {
  public getTasks(): Task[] {
    const tasks: Task[] = [
      {
        number: 1,
        priority: 'Высокий',
        text: 'Купить пингвина',
        startDate: '7.22.2021',
        endDate: '8.22.2021',
        status: 'Завершена',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 2,
        priority: 'Средний',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 3,
        priority: 'Низкий',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 4,
        priority: 'Высокий',
        text: 'Купить пингвина',
        startDate: '7.22.2021',
        endDate: '8.22.2021',
        status: 'Завершена',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 5,
        priority: 'Средний',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 6,
        priority: 'Низкий',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 7,
        priority: 'Высокий',
        text: 'Купить пингвина',
        startDate: '7.22.2021',
        endDate: '8.22.2021',
        status: 'Завершена',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 8,
        priority: 'Средний',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 9,
        priority: 'Низкий',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 10,
        priority: 'Высокий',
        text: 'Купить пингвина',
        startDate: '7.22.2021',
        endDate: '8.22.2021',
        status: 'Завершена',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 11,
        priority: 'Средний',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 12,
        priority: 'Низкий',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 13,
        priority: 'Высокий',
        text: 'Купить пингвина',
        startDate: '7.22.2021',
        endDate: '8.22.2021',
        status: 'Завершена',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 14,
        priority: 'Средний',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
      {
        number: 15,
        priority: 'Низкий',
        text: 'Any',
        startDate: '1',
        endDate: '2',
        status: 'sdv',
        participants: 'sdfsdf',
        actions: 'sdfsdf',
      },
    ];
    return tasks;
  }

  public getParticipants(): Participant[] {

    const participants: Participant[] = [
      {
        surname: 'Мордашов',
        name: 'Денис',
        patronymic: 'Викторович',
      },
      {
        surname: 'Мельников',
        name: 'Алексей',
        patronymic: 'Игоревич',
      },
      {
        surname: 'Герасимов',
        name: 'Никита',
        patronymic: 'Сергеевич',
      },
      {
        surname: 'Черных',
        name: 'Андрей',
        patronymic: 'Владимирович',
      },
    ];
    return participants;
  }
}
