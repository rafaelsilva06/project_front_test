import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemFormComponent } from "./tasks/item-form/item-form.component";
import { ItemListComponent } from "./tasks/item-list/item-list.component";
import { TaskFormComponent } from "./tasks/task-form/task-form.component";
import { TaskListComponent } from "./tasks/task-list/task-list.component";

const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'task/new', component: TaskFormComponent },
    { path: 'task/edit/:taskId', component: TaskFormComponent },
    { path: 'item/new', component: ItemFormComponent },
    { path: 'task/edit/:taskId/item/edit/:id', component: ItemFormComponent },
    { path: 'task/edit/:taskId/item/new', component: ItemFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }