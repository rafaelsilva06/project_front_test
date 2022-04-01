import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { ItemFormComponent } from './tasks/item-form/item-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ItemComponent } from './tasks/item/item.component';
import { ItemListComponent } from './tasks/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ItemListComponent,
    TaskListItemComponent,
    ItemComponent,
    TaskFormComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
