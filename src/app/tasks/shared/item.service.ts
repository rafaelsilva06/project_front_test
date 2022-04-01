import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from './task';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Item[]>(`${environment.api}/itens`);
  }

  getById(id: string) {
    return this.http.get<Item>(`${environment.api}/itens/${id}`);
  }  

  getByTaskId(taskId: string) {
    return this.http.get<Item[]>(`${environment.api}/itens?taskId=${taskId}`);
  }

  save(item: Item) {
    const itemBody = {
      taskId: item.taskId,
      title: item.title,
      completed: item.completed
    };
    if (item.id) {
      return this.http.put<Item>(`${environment.api}/itens/${item.id}`, itemBody);
    } else {
      return this.http.post<Item>(`${environment.api}/itens`, itemBody);
    }
  }

  delete(id: string) {
    return this.http.delete<Item>(`${environment.api}/itens/${id}`);
  }
}
