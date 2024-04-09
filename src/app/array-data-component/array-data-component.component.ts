import { Component } from '@angular/core';

@Component({
  selector: 'app-array-data-component',
  templateUrl: './array-data-component.component.html',
  styleUrls: ['./array-data-component.component.css']
})
export class ArrayDataComponentComponent {
  courses=["angular","react","vue","Node"];
  show=this.courses[3];
}
