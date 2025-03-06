import { NgFor, NgIf } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { Component, Input } from '@angular/core';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  imports: [NgIf, NgFor, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];
}
