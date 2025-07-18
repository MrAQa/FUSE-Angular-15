import { Route } from '@angular/router';
import { SalesComponent } from './sales.component';
import { ListComponent } from './list/list.component';


export const salesRoutes: Route[] = [
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
