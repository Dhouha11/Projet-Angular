import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
{path:'',component:AuthentificationComponent,pathMatch:'full'},
{path:'post',component:PostListComponent},
{path:'auth',component:AuthentificationComponent},
{path:'**',redirectTo:'post'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
