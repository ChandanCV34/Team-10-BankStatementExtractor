import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  message: any = null;
  selectedFile:any = null;
  msg : String = '';

  constructor(private http: HttpClient,private _router:Router) { }
  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  analysis(analysis:any){
    this._router.navigate(['analysis'])
    //this._router.navigateByUrl('http://localhost:4200/analysis')
  }
  onUpload(){
    const fd = new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name)
    this.http.post('http://127.0.0.1:5000/file-upload',fd)
    .subscribe(res=>{
      console.log(res);
      this.message = res;
      this.msg = this.message.message;
    });
  }

  ngOnInit(): void {
  }

}
