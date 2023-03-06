import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Components/todo/todo.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
