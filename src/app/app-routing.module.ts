import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { DirectivesexampleComponent } from './directivesexample/directivesexample.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { EditparentComponent } from './editparent/editparent.component';
import { DatafetchComponent } from './datafetch/datafetch.component';
import { FetchMultipleComponent } from './fetch-multiple/fetch-multiple.component';
import { AuthGuard } from './auth/auth.guard';
import { deactivateGuard } from './auth/deactivate.guard';


const routes: Routes = [
  { path: '', component: HomecomponentComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'parent/:parentId', component: EditparentComponent },
  { path: 'directive', component: DirectivesexampleComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'fetch', component: DatafetchComponent },
  { path: 'fetch-all', component: FetchMultipleComponent },
  {
    path: 'admin', 
    canActivate:[AuthGuard],
    canDeactivate:[deactivateGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
