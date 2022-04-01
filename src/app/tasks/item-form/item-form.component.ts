import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit {
  item: Item = new Item();
  title: string = '';
  taskId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itemService: ItemService 
  ) { }

  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.params['taskId'];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {      
      this.title = 'Alterando item';
      this.itemService.getById(id).subscribe(item => {
        this.item = item;
        
      })
    } else {
      this.title = 'Novo Item';
    }
  }

  onSubmit(){
    this.item.taskId = this.taskId;
    this.itemService.save(this.item).subscribe(item => {
      console.log(item);
      this.router.navigate(['task/edit/', this.taskId]);
    });
  }

  returnPreviousPage(){    
    this.taskId = this.activatedRoute.snapshot.params['taskId'];
    this.router.navigate(['/task/edit/', this.taskId])
  }



}
