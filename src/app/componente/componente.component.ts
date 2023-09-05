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
}
