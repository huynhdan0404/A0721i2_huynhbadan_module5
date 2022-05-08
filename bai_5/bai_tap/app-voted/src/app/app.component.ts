import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voted';
  yParent:any;
  ratingBarHandle(y:any){
    this.yParent = y;
  }
}
