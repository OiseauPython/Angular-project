import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{ path: 'appareils', component: AppareilViewComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: '', component: AppareilViewComponent }
  ];

@NgModule({
	imports: [
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
  exports: [RouterModule]
})


export class AppRoutingModule { }
