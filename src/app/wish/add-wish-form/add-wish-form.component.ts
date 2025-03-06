import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

//EventEmitter is to send data from child to parents component as Output

@Component({
  selector: 'add-wish-form',
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText='';
  }
}
