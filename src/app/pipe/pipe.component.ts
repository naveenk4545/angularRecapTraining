import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  title:string='Accenture';
  todayDate=new Date();

  jsonVal={'Name':'Naveen','Techstack':'MEAN'};
  original =10;
}
