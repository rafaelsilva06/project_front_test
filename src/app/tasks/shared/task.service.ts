import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Task[]>(`${environment.api}/tasks`);
  }

  getById(id: string) {
    return this.http.get<Task>(`${environment.api}/tasks/${id}`);
  }

  save(task: Task) {
    const taskBody = {
      title: task.title,
      description: task.description,
      completed: task.completed
    };

    if (task.id) {
      return this.http.put<Task>(`${environment.api}/tasks/${task.id}`, taskBody);
    } else {
      return this.http.post<Task>(`${environment.api}/tasks`, taskBody);
    }
  }

  delete(id: string) {
    return this.http.delete<Task>(`${environment.api}/tasks/${id}`);
  }
}

