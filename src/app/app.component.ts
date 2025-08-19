import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item> //cria-se uma variavel para alocar um array do tipo item (ITEM É UMA INTERFACE E ESTÁ DISPONIVEL NA PASTA DE INTERFACES)
  itemParaSerEditado! : Item;
  
  constructor(private listaService: //injeção do service de lista de compras
     ListaDeCompraService) { }

     ngOnInit(): void {
       this.listaDeCompra = this.listaService.getListaDeCompra(); // chama o metodo getListaDeCompras e atrela seu resultado a variavel que criamos (this.listaDeCompras)
       console.log(this.listaDeCompra) //imprime no console os arrays da listaDeCompras
     }

     editarItem(item: Item){
      this.itemParaSerEditado = item
     }

     deletarItem(id: number){
      const index = this.listaDeCompra.findIndex((item)=>item.id === id);
      this.listaDeCompra.splice(index, 1);
     }

     limparLista(){
      this.listaDeCompra = []
     }

     ngDoCheck() {
       this.listaService.atualizarLocalStorage()
       console.log('DoCheck foi chamado')
     }
}
