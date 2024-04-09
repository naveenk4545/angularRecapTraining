import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {
  show=true;
  dynamic(){
    return{
      'color':this.show ? 'red':'blue',
      'font-size':this.show ? '30px':'40px',
      'background-color':this.show ? 'white':'green'
    }
  }
}
