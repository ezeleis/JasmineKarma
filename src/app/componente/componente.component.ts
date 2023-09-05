import { Component } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  myArray: string[] = [];

  addItemToBeginning(item: string): string[] {
    this.myArray.unshift(item);
    return this.myArray;
  }

  removeItem(item: string): string[] {
    const index = this.myArray.indexOf(item);
    if (index !== -1) {
      this.myArray.splice(index, 1);
    }
    return this.myArray;
  }

}
