import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    //providedIn = root, application level injector, for the entire application
    //platform = multiple angular application running on the same page
    providedIn: 'root'    
})
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any){
        this.subject.next({eventName, payload});
    }

    listen(eventName: string, callback: (event: any) => void){
        //Converts the Subject into an Observable so it can be subscribed to
        this.subject.asObservable().subscribe((nextObj: any) =>{       
            if (eventName === nextObj.eventName){
                callback(nextObj.payload);
            }
        });
    }
}