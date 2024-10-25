import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './estructura/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { PlandeentrenamientoComponent } from './modulos/plandeentrenamiento/plandeentrenamiento.component';
import { RecordatorioComponent } from './modulos/recordatorio/recordatorio.component';
import { DescubreComponent } from './modulos/descubre/descubre.component';
import { InformeComponent } from './modulos/informe/informe.component';
import { ReiniciarprogresoComponent } from './modulos/reiniciarprogreso/reiniciarprogreso.component';
import { LoginComponent } from './modulos/login/login.component';
import { NoEncontroComponent } from './modulos/no-encontro/no-encontro.component';

const routes: Routes = [
    {
        path: '', component: PrincipalComponent,
        children:
        [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'plandeentrenamiento', component: PlandeentrenamientoComponent},
            {path: 'recordatorio', component: RecordatorioComponent},
            {path: 'descubre', component: DescubreComponent},
            {path: 'informe', component: InformeComponent},
            {path: 'reiniciarprogreso', component: ReiniciarprogresoComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    },

    {path: 'login', component: LoginComponent},
    {path: '**', component:NoEncontroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
