import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { InformeService } from 'src/app/servicios/informe.service'; 

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent {

  Informe: any;
  Categoria: any;
  obj_informe = {
    Nombre: "",
    fo_categoria: 0,
    Peso: "",
    Edad: "",
    
  }
  validar_Nombre=true;
  validar_categoria=true;
  validar_Peso=true;
  validar_Edad=true;
  validar_proveedor=true;
  mform=false;
  url = 'http://localhost/rungympro/backend/controlador/informe.php'
  

  constructor( private router:Router, private sinforme:InformeService, private scate:CategoriaService){}

  ngOnInit(): void{
    this.consulta();
    this.consulta_c();
  }

  consulta(){
    this.sinforme.consultar().subscribe((resultado:any) => { 
      this.Informe = resultado;  
      console.log(this.obj_informe)  
    })
  }

  consulta_c(){
    this.scate.consultar().subscribe((resultado:any) => { 
      this.Categoria = resultado;    
    })
  }

  mostrar_form(dato: any){
    switch(dato){
      case "ver":
        this.mform = true
      break;
      case "no ver":
        this.mform = false;
      break;  

    }
  }

  limpiar(){
    this.obj_informe = {
      Nombre: "",
      fo_categoria: 0,
      Peso: "",
      Edad: "",
      
    }  
  }

  validar(){
    if(this.obj_informe.Nombre == ""){
      this.validar_Nombre=false;
    }else{
      this.validar_Nombre=true;
    }
  
    if(this.obj_informe.fo_categoria == 0){
      this.validar_categoria=false;
    }else{
      this.validar_categoria=true;
    }
  
    if(this.obj_informe.Peso == ""){
      this.validar_Peso=false;
    }else{
      this.validar_Peso=true;
    }

    if(this.obj_informe.Edad == ""){
      this.validar_Edad=false;
    }else{
      this.validar_Edad=true;
    }

   

    if(this.validar_Nombre==true && this.validar_categoria==true && this.validar_Peso==true && this.validar_Edad==true){
      this.guardar();
    }
  }

  guardar(){
    this.sinforme.insertar(this.obj_informe).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
        this.consulta();
      }
    });
    this.limpiar();
    this.mostrar_form('no ver');

  }

  eliminar(id_informe: number) {
    if (id_informe) {
        this.sinforme.eliminar(id_informe).subscribe((datos: any) => {
            if (datos['resultado'] === 'OK') {
                this.consulta();
            }
        });
    } else {
        console.error('El id_informe no es válido');
    }
}


  }



