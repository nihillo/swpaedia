import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, term: any): any {
    return value.filter(item => {
    	if (term) {
    		let regexp = new RegExp('\\b' + term, 'gi');
    		return regexp.test(item.title) || regexp.test(item.name);
    	} else {
    		return true;
    	}
    });
  }

}
