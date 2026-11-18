# AMAKHA - HOME | Teste Wicomm

Reprodução responsiva da referência enviada, utilizando HTML5, CSS puro e TypeScript.

## Como executar

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Funcionalidades implementadas

- Cada card de produto pode ser clicado para adicionar o item ao carrinho.
- O carrinho lateral abre automaticamente após a inclusão de um produto.
- O contador do carrinho é atualizado em tempo real.
- O carrinho apresenta imagem, nome, quantidade, subtotal e total.
- É possível remover um produto do carrinho.
- Cada vitrine possui setas para avançar e voltar cinco cards.
- No celular, as vitrines também podem ser navegadas por rolagem horizontal.
- O botão de carrinho no cabeçalho abre o painel lateral.

Os produtos são demonstrativos e repetidos nas vitrines para permitir testar a navegação sem criar um catálogo novo. O carrinho é mantido somente durante a sessão e não possui integração com pagamento ou backend.

## Organização das pastas

- `index.html`: página principal que recebe os três blocos.
- `src/partials/`: HTML separado para header, main e footer.
- `src/styles/main.css`: estilos e responsividade.
- `src/ts/main.ts`: inicialização da página.
- `src/ts/components/`: funcionalidades separadas por componente.
- `src/ts/data/products.ts`: catálogo demonstrativo.
- `public/images/`: imagens fictícias separadas por header, main e footer.

## Imagens

As imagens atuais são placeholders em SVG. Substitua os arquivos dentro de `public/images`, mantendo os nomes e caminhos, ou atualize os caminhos nos arquivos correspondentes.

## Decisões técnicas

O HTML das três áreas é carregado como partials pelo arquivo principal TypeScript. A renderização dos produtos, o carrinho e os controles dos carrosséis ficam em módulos independentes. O CSS foi organizado em blocos e regras identadas para facilitar manutenção.

## Melhorias futuras

- Integrar catálogo e carrinho a uma API.
- Persistir o carrinho com localStorage.
- Implementar página individual de produto.
- Conectar o formulário de newsletter a um serviço real.
- Substituir as imagens fictícias pelos assets oficiais do Figma.
