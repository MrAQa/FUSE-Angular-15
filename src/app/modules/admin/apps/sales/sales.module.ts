import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutes } from './sales.routing';
import { RouterModule } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { SalesComponent } from './sales.component';
import { ListComponent } from './list/list.component';


@NgModule({
    
  declarations: [SalesComponent, ListComponent],
  imports: [
    RouterModule.forChild(SalesRoutes),
    CommonModule,
  ]
})
export class SalesModule { }
