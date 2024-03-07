import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  mensaje:string = "";
  primera:number = 0;
  ngOnInit(): void {
    this.mostrar();
  }

mostrar(){
if(this.primera==0){
      this.mensaje = "Hola, ¿que tal estás?";
      this.primera ++;
    }
    else{
      this.mensaje = "bienvenido de vuelta";
    } 
}
  cambiarMensj(){
    this.primera ++;
  }
}
