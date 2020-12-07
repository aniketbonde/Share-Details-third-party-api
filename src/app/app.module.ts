import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareOptionComponent } from './components/share-option/share-option.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ShareDetailsCallService } from "../app/services/share-details-call.service";
const material: any[] = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ShareOptionComponent
  ],
  imports: [...material],
  exports: [...material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
