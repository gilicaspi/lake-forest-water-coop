import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from 'src/app/main-content/main-content.component';

const routes: Routes = [
  { path: 'temp', component: MainContentComponent},
  { path: '**', component: MainContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
