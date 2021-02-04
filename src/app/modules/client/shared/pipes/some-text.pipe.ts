import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'someText'
})
export class SomeTextPipe implements PipeTransform {

  transform(text:string): string {
    
    return text.substring(0,50) + "....";
  }

}
