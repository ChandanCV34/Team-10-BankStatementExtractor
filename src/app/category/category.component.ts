import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  image = '';
  image$:Promise<any>;
  imgLoad:any
  constructor() {
    this.image$ = this.loadImage(this.image);
   }

  ngOnInit(): void {
  }

  

  loadDataamount():void{
    this.image = 'http://127.0.0.1:5000/amountgraph';
    this.image$ = this.loadImage(this.image);

  }

  loadDebitsamount():void{
    this.image='http://127.0.0.1:5000/categoryamount'
    this.image$=this.loadImage(this.image);
  }
  loadcreditDataamount():void{
    this.image='http://127.0.0.1:5000/creditsamount'
    this.image$=this.loadImage(this.image);
  }
  loadbalanceamount():void{
    this.image='http://127.0.0.1:5000/balanceamount'
    this.image$=this.loadImage(this.image);

  }
  loadImage(src:string) {
    return new Promise((resolve, reject) => {
      resolve(src);
    });
  }

}
