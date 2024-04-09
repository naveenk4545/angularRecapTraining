import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  resData:any;
  newsData:any;
  xyz:any;
  constructor(public user:NewsService){

  }
  ngOnInit(){
    this.xyz=this.user.getLatestNews().subscribe(res=>{
      this.resData=res;
      if(this.resData.status=="ok"){
        this.newsData=this.resData.articles;
        console.log(this.newsData);
      }
    },err=>
    {
      console.log("not found");
    })
  }

  ngOnDestroy(){
    if(this.xyz){
      this.xyz.unsubscribe();
    }
  }
}
