import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { CentroComponent } from './components/centro/centro.component';
import { BotaoComponent } from './components/botao/botao.component';
import { InputPesquisaComponent } from './components/input-pesquisa/input-pesquisa.component';
import { TabelaCursosComponent } from './components/tabela-cursos/tabela-cursos.component';
import { ItemCursoComponent } from './components/item-curso/item-curso.component';
import { IncluirComponent } from './components/incluir/incluir.component';
import { HomeComponent } from './components/home/home.component';
import { MainIncluirComponent } from './components/main-incluir/main-incluir.component';
import { CentroMainComponent } from './components/centro-main/centro-main.component';
import { IncluirFormComponent } from './components/incluir-form/incluir-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'incluir', component: IncluirComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    CentroComponent,
    BotaoComponent,
    InputPesquisaComponent,
    TabelaCursosComponent,
    ItemCursoComponent,
    IncluirComponent,
    HomeComponent,
    MainIncluirComponent,
    CentroMainComponent,
    IncluirFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
