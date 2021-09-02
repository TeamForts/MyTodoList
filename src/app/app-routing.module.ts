import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewTasksComponent} from "./entities/components/viewTasks/view.tasks.component";
import {CreateTaskComponent} from "./entities/components/createTask/create.task.component";

const routes: Routes = [
  {
    path: '', component: ViewTasksComponent
  },
  {
    path: 'createTask', component: CreateTaskComponent
  },
  {
    path: '**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
