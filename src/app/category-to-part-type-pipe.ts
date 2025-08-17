import { Pipe, PipeTransform } from '@angular/core';

//this pipe will be used to convert category to its singular form
// e.g. heads -> Head, arms -> Arm, torsos -> Torso, .. etc
@Pipe({
  name: 'categoryToPartType' //this will be the pipe name you use in the template
})

export class CategoryToPartTypePipe implements PipeTransform {

  //first parameter here is the value before the pipe   e.g.
  transform(category: string): string {
    //take the category first letter and uppercase
    //slice first arg 1 means from 2nd character
    //slice 2nd arg -1 is used to remove the last character 's' to make the word singular (simple approach)
    return category[0].toUpperCase() +  category.slice(1,-1);
  }

}
