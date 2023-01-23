import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './IEvent';

@Pipe({
  name: 'searchEvent'
})
export class SearchEventPipe implements PipeTransform {

  transform(events: Event[], args: String): Event[]  {
    
    let searchStr: string = args.toLocaleLowerCase();
    return events.filter(event => {
      let eventName = event.eventName.toLocaleLowerCase()
      return eventName.indexOf(searchStr) !== -1
    });
  
  }

}
