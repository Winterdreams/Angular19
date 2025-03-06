import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/services/EventService';


@Component({
  selector: 'wish-list-item',
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
  standalone: true
})
export class WishListItemComponent {
  @Input() wish! : WishItem;   //! = non null property

  get cssClasses(){
    //return this.fullfilled ? ['strikeout', 'text-muted'] : '';   //text-muted from boostrap

    return {'strikeout text-muted' : this.wish.isComplete};
  }

  constructor(private events: EventService){

  }

  removeWish(){
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled(){
    this.wish.isComplete = !this.wish.isComplete;
  }
}
