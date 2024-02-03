import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'calculadora',component:CalculadoraComponent},
  {path:'noticias',component:NoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
