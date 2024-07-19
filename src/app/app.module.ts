import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employeelisttitlecomponet } from './Employee/Employeelist.component.';
import { EmployeeTableComponent } from './Employeetable/employee-table.component';


@NgModule({

  declarations: [
    AppComponent,
    Employeelisttitlecomponet,
    EmployeeTableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
