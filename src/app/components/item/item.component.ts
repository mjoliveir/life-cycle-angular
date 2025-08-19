import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();


  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { 
    console.log('OnInit')
  }

  ngOnChanges() {
    console.log('OnChanges')
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }
  
  deletarItem(){
    console.log('can u lock the fuck in?')
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

  ngOnDestroy(){
    console.log('u lock the fuck in')
  }
}
