import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { Task } from '../shared/task';

@Component({
  selector: 'ngx-app-item',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itens: Item[] = [];  
  
  @Input()
  taskId = '';


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.taskId);
    
    const taskId = this.activatedRoute.snapshot.paramMap.get('taskId');
    if (taskId) {      
      this.itemService.getByTaskId(taskId).subscribe(itens => {
        this.itens = itens;
      });
    }

  }

  onItemDeleted(item: Item){
    if (item){
      const index = this.itens.findIndex((item) => item.id == item.id);
      this.itens.splice(index, 1);
    }
  }

}
