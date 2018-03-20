import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components 
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';


const routes: Routes = [
  {
    path: "",
    component: MoviesListComponent
  },
  {
    path: "details/:id",
    component: DetailedViewComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
