import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  image = '';
  image$:Promise<any>;
  imgLoad:any
  

  constructor(private _router:Router) { 
    this.image$ = this.loadImage(this.image);
  }
 

  ngOnInit(): void {
  }

  loadData():void{
    this.image = 'http://127.0.0.1:5000/bargraph';
    this.image$ = this.loadImage(this.image);
  }

  
  category(category:any){
    this._router.navigate(['category'])

  }
  loadScatter():void{
    this.image = 'http://127.0.0.1:5000/scattergraph';
    this.image$ = this.loadImage(this.image);

  }
  loadImage(src:string) {
    return new Promise((resolve, reject) => {
      resolve(src);
    });
  }

}
