import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item = new Item;

  @Output()
  onDeleteItem = new EventEmitter()

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  remove(item: Item) {
    this.itemService.delete(item.id).subscribe(() => {
      this.onDeleteItem.emit(item);
    });
  }

  onCompletedCheckChange(item: Item) {
    this.itemService.save(item).subscribe(item => {
      console.log(item);
    });
  }

}
