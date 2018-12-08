import {
    NgModule} from '@angular/core';
import {
    FormsModule} from '@angular/forms';
import {
    Routes} from '@angular/router';
import {
    RouterModule} from '@angular/router';
import {
    BrowserModule} from '@angular/platform-browser';
import {
    AppComponent} from './app.component';
import {
    AppareilViewComponent} from './appareil-view/appareil-view.component';
import {
    AppareilComponent} from './appareil/appareil.component';
import {
    AuthComponent} from './auth/auth.component';
import {
    AppareilService} from './services/appareil.service';


const appRoutes: Routes = [{
        path: 'appareils',
        component: AppareilViewComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: '',
        component: AppareilViewComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        AuthComponent,
        AppareilViewComponent
    ],
    imports: [
		BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [AppareilService],
    bootstrap: [AppComponent]
})
export class AppModule {
	
}
