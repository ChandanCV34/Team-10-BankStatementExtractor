import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {HttpClientModule} from '@angular/common/http';
import { AnalysisComponent } from './analysis/analysis.component'
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    AnalysisComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
