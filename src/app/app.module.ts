import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './estructura/nav/nav.component';
import { AsideComponent } from './estructura/aside/aside.component';
import { ContentComponent } from './estructura/content/content.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './estructura/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { PlandeentrenamientoComponent } from './modulos/plandeentrenamiento/plandeentrenamiento.component';
import { RecordatorioComponent } from './modulos/recordatorio/recordatorio.component';
import { DescubreComponent } from './modulos/descubre/descubre.component';
import { InformeComponent } from './modulos/informe/informe.component';
import { ReiniciarprogresoComponent } from './modulos/reiniciarprogreso/reiniciarprogreso.component';
import { LoginComponent } from './modulos/login/login.component';
import { NoEncontroComponent } from './modulos/no-encontro/no-encontro.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    ContentComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    PlandeentrenamientoComponent,
    RecordatorioComponent,
    DescubreComponent,
    InformeComponent,
    ReiniciarprogresoComponent,
    LoginComponent,
    NoEncontroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
