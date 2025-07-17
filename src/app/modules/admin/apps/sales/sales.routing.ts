import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { TasksListComponent } from '../tasks/list/list.component';
import { TasksResolver, TasksTaskResolver } from '../tasks/tasks.resolvers';
import { TasksDetailsComponent } from '../tasks/details/details.component';
import { CanDeactivateTasksDetails } from '../tasks/tasks.guards';
import { ListComponent } from './list/list.component';


export const SalesRoutes: Route[] = [
    {
        path     : '',
        component: SalesComponent,
        // resolve  : {
        //     tags: TasksTagsResolver
        // },
        children : [
            {
                path     : '',
                component: ListComponent,
                // resolve  : {
                //     tasks: TasksResolver
                // },
                children : [
                    // {
                    //     path         : ':id',
                    //     component    : TasksDetailsComponent,
                    //     resolve      : {
                    //         task: TasksTaskResolver
                    //     },
                    //     canDeactivate: [CanDeactivateTasksDetails]
                    // }
                ]
            }
        ]
    }
];
