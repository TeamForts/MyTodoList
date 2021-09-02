import { Component } from '@angular/core';
import { ServiceTasks} from "../../services/tasks.service";
import {Task} from "../../interfaces/task.interface";

@Component({
    selector: 'app-root',
    templateUrl: './view.tasks.component.html',
    styleUrls: ['./view.tasks.component.scss'],
})
export class ViewTasksComponent {
    dataSource: Task[];
    constructor(private _service: ServiceTasks) {
        this.dataSource = _service.getTasks();
    }
}