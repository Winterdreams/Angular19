import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../../shared/models/wishItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });

    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));   //endpoint url, .subscribe = method is send once subcribe is called
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0){
      console.error('There is an issue with the client or network: ', error.error);
    } else {
      console.error('Servce-side error: ', error.error);
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.header = options.header.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/wishes.json', wish, options);
  }
}
