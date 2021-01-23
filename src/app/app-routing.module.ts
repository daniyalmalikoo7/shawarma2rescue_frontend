import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'add', component:AddComponent},
{path: 'details/:id', component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
