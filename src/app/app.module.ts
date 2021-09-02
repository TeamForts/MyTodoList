import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DevExtremeModule} from "devextreme-angular";
import {CreateTaskComponent} from "./entities/components/createTask/create.task.component";
import {ViewTasksComponent} from "./entities/components/viewTasks/view.tasks.component";
import {ServiceTasks} from "./entities/services/tasks.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    ViewTasksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceTasks],
  bootstrap: [AppComponent]
})
export class AppModule { }
