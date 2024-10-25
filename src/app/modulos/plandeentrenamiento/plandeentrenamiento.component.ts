import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-plandeentrenamiento',
  templateUrl: './plandeentrenamiento.component.html',
  styleUrls: ['./plandeentrenamiento.component.scss']
})
export class PlandeentrenamientoComponent {

  categoria: any;

  constructor(private scate:CategoriaService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.scate.consultar().subscribe((resultado:any) => { 
      this.categoria = resultado;    
    })
  }

}
