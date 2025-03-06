import { Component, OnInit } from '@angular/core';
import { WishItem } from './../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from './../../shared/services/EventService';
import { WishService } from './wish.service';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'wish',
  imports: [
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    ContactComponent
  ],
  providers: [
    WishService
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
  standalone: true
})
export class WishComponent implements OnInit {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);          //pass in index and remove 1 item
    })
  }

  ngOnInit() : void {
    this.wishService.getWishes().subscribe(
      (data : any) => {
        this.items = data;
      },
      (error : any) => {
        alert(error.message);
      }
    );
  }

  filter: any;
}
