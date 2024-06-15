import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent {
  public produtos: Produto[] = [];
  constructor(private _produtoService: ProdutoService,
    private router: Router) { }
  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos(): void {
    this._produtoService.getProdutos()
        .subscribe(produtos => {

            for (const produto of produtos) {
                this.produtos.push(new Produto(
                    produto.id,
                    produto.produto,
                    produto.descricao,
                    produto.foto,
                    produto.preco
                ));
            }
        });
}
  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => { console.log("erro ao Excluir") }
    );
    // window.location.href = "/restrito/lista";
    this.router.navigate(["/restrito/lista"]);
  }
}
