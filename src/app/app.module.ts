import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [ // all components go here
    AppComponent,
    TodosComponent,
  ],
  imports: [ // place modules here to use
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent] // main component currently injected in to root html
})
export class AppModule { }
