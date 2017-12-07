import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/my-body/my-body.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'body', component: BodyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule {
}
