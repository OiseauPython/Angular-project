import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-gard.service';
import { UserService } from './services/user.service';
import { from } from 'rxjs';



const appRoutes: Routes = [
	{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
	{ path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
	{ path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
	{ path: 'auth', component: AuthComponent },
    { path: 'new-user', component: NewUserComponent },
	{ path: 'users', component: UserListComponent },
	{ path: '', component: AppareilViewComponent },
	{ path: 'not-found', component: FourOhFourComponent },
	{ path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        AuthComponent,
        AppareilViewComponent,
        SingleAppareilComponent,
        FourOhFourComponent,
		EditAppareilComponent,
		UserListComponent,
		NewUserComponent
    ],
    imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
	],
    providers: [
		AppareilService, 
		AuthService,
		AuthGuard,
		UserService
	],
    bootstrap: [AppComponent]
})
export class AppModule {

}
