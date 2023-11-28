import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../Curso';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  @Input() selected!: Curso;
  

  constructor() { }

  ngOnInit() {
  }

}
