import { Component } from '@angular/core';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css'],
})
export class JsonDataComponent {
  data = [
    { sno: 1, name: 'naveen', technology: 'Mean stack', city: 'Hyderabad' },
    { sno: 2, name: 'kartheek', technology: 'Mern stack', city: 'Hyderabad' },
    { sno: 3, name: 'Sai', technology: 'java stack', city: 'Hyderabad' },
    { sno: 4, name: 'Sai', technology: 'java stack', city: 'Hyderabad' },
  ];
  // dataTwo = [
  //   {
  //     isActive: true,
  //     isApprove: true,
  //     imageUrl:
  //       'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
  //   },
  //   {
  //     isActive: false,
  //     isApprove: true,
  //     imageUrl:
  //       'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
  //   },
  // ];
  // for() {}
  abc() {
    alert('working in angular');
  }
}
