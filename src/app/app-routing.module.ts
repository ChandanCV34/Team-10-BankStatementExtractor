import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [

  {path:'',component:FileUploadComponent},
  {path:'analysis',component:AnalysisComponent},
  {path: 'category',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
