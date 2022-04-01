import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = '';
  taskId: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService 
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('taskId');
    if (id) {      
      this.title = 'Alterando tarefa';
      this.taskService.getById(id).subscribe(task => {
        this.task = task;        
        const taskId = task.id;
      })
    } else {
      this.title = 'Nova Tarefa';
    }
  }

  onSubmit(){
    this.taskService.save(this.task).subscribe(task => {
      console.log(task);
      this.router.navigate(['']);
    });
  }

}
