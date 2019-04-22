import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
const appRoutes: Routes = [  
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
