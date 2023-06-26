import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component'

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'registrazione', component:RegistrazioneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
