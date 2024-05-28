import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], startWith: string): any {
    if(startWith.toLocaleLowerCase()==''){
      return null;
    }else{
      let temp: string[] = [];
    temp = array.filter(a => a.title.toLowerCase().startsWith(startWith.toLowerCase()));
    return temp;
    }
    
  }
}