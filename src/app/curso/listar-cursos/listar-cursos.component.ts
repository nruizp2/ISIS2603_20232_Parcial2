import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  public cursos: Array<Curso> = [];

  public ofrecenCertificado: Array<Curso> = [];
  public stringOfrecen = "Los cursos ";
  public ultimo !: Curso;

  selected!:Curso;
  haySelected = false;

  constructor(private cursoService: CursoService) { }

  getCursos(){
    this.cursoService.getCursos().subscribe(datos => {
      this.cursos = datos;
      datos.forEach(dato => {
        if(dato.offers_certificate){
          this.ofrecenCertificado.push(dato)
          this.ultimo = dato;
        }
      });

      this.ofrecenCertificado.forEach(dato => {
        if(dato.id == this.ultimo.id){
          this.stringOfrecen =  this.stringOfrecen.substring(0,this.stringOfrecen.length-2)
          this.stringOfrecen += " y " + dato.id
        }
        else{
          this.stringOfrecen += dato.id + ", "
        }
      });

      this.stringOfrecen += " ofrecen certificado."
      
      
    });
    
  } 

  ngOnInit() {
    this.getCursos();
  }

  mostrar(curso:Curso){

    this.selected = curso;
    this.haySelected = true;

  }
}
