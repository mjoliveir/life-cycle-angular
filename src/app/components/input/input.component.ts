import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar Item'

  valorItem!: string 
  constructor(private ListaService: ListaDeCompraService) { } //injeção dos metodos abaixo

  ngOnInit(): void { }
  adicionarItem(){
    this.ListaService.adicionarItemNaLista(this.valorItem) // chama o metodo adicionarItemNaLista (que vem de uma service e passa this.valorItem como parâmetro)
    this.limparCampo() //limpa o input
  }

  limparCampo(){
    this.valorItem = ''
  }

  editarItem(){
    this.ListaService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem)
    this.limparCampo()
    this.editando = false;
    this.textoBtn = 'Salvar item'
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true
      this.textoBtn = 'Editar Item'
      this.valorItem = this.itemQueVaiSerEditado?.nome
    }
  }

}
