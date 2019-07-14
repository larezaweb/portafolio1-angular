import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
     //console.log('Servicio de infoPagina listo');
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina ) => {
       
        //console.log( resp['email'] );
        this.cargada = true;
        this.info = resp;
       
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-larezaweb.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
        this.equipo = resp;
        console.log(resp);
    });
  }

  }

