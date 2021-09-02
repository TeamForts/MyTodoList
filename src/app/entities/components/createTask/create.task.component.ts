import {Component} from '@angular/core';
import {Task} from '../../interfaces/task.interface';

import {Participant} from '../../interfaces/participant.interface';
import {ServiceTasks} from '../../services/tasks.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'create-task',
    templateUrl: './create.task.component.html',
    styleUrls: ['./create.task.component.scss'],
})
export class CreateTaskComponent {
    task?: Task;
    users: Participant[];
    currentUser: Participant;
    selectUsers: Participant[] = [];

    popupVisible = false;
    myForm: FormGroup;


    constructor(service: ServiceTasks, private _fb: FormBuilder) {
        this.users = service.getParticipants();
        this.currentUser = this.users[0];

        this.myForm = this._fb.group({
            priority: [null, [Validators.required]],
            text: [null, [Validators.required]],
            startDate: [null, [Validators.required]],
            endDate: [null, [Validators.required]],
            state: [null, [Validators.required]],
            selectUsers: [[], [Validators.required]],
        })

        this.myForm.valueChanges.subscribe((value) => {
            console.log(this.myForm);
        });
    }

    public editParticipant(user: Participant) {
        this.currentUser = user;
        this.popupVisible = true;
    }

    public checkForm(): boolean {
        if ((this.myForm.invalid) && (this.selectUsers.length == 0))
            return true
        else
            return false
    }

    public test(event: any): void {

        this.myForm.get('selectUsers')?.patchValue(this.selectUsers);
        this.myForm.get('selectUsers')?.updateValueAndValidity();
        console.log(443434, this.myForm.get('selectUsers')?.value);
    }
}
