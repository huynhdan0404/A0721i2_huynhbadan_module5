import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictonarDetailComponent } from './dictonar-detail/dictonar-detail.component';

const routes: Routes = [
  {path:'detail',component:DictonarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
