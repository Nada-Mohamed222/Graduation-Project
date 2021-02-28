import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'someText',
})
export class SomeTextPipe implements PipeTransform {
  transform(text: string): string {
    const elipses = "...";
    if (text.length <= 200) return text
    let truncatedText = text.slice(0, 200);
    return truncatedText + elipses;
  }
}
