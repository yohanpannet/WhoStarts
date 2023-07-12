import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PickFirstPlayerComponent } from './pick-first-player/pick-first-player.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pick-first-player', component: PickFirstPlayerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
