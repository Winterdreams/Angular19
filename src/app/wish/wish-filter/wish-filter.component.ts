import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
  standalone: true
})
export class WishFilterComponent implements OnInit{
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>(); //angular rules to set Change behind the variables to indicate the output

  ngOnInit(): void{
    this.updateFilter('0');
  }

  listFilter: number = 0;         //bind the data to option value=0

  updateFilter(value: any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
