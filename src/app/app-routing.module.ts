import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';


const routes: Routes = [
  { path:'users', component: UsersComponent},
  { path:'users/:id', component: UserDetailsComponent},
  { path:'**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
