import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/*manar zedetehom MatDividerModule,MatIconModule,MatButtonModule*/

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  
    ToastrModule.forRoot(),  
    HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule

  ],
 

  exports: [
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
