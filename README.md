# Verificador de Bandeira do Cartão de Crédito

Este projeto tem como objetivo desenvolver uma aplicação simples capaz de identificar a bandeira de um cartão de crédito (como Visa, MasterCard, Amex, etc.) com base no número do cartão. Utilizando o GitHub Copilot como assistente de codificação, exploramos como a inteligência artificial pode acelerar o desenvolvimento, sugerir trechos de código e melhorar a produtividade. O projeto foca em lógica de validação com expressões regulares e boas práticas de programação.

Este projeto faz parte do Desafio 1 do curso Microsoft GitHub Copilot da DIO, e foi utilizado o VSCode e o GitHub Copilot com a licença gratuita.

## Criação

### Projeto

Este projeto foi criado por meio do GitHub Copilot Chat, utilizando o seguinte comando:

```console
@workspace /new crie uma estrutura de um projeto para uma página web simples, na qual eu tenha uma página principal (home) e uma página sobre (about).
Esta estrutura deverá respeitar as melhores boas práticas para desenvolvimento web e suportar páginas html, folhas de estilo, scripts e imagens de forma separada.
```

### Páginas HTML

#### `index.html`

A página `index.html` também foi editada por meio do seguinte comando:

```console
Dentro da tag `main` crie uma seção que contenha um `label` com o texto "Digite o número do cartão", um `input` e uma  `div`.
Dentro da `div` deve existir uma tag `img` e a propriedade `src` deve apontar para uma função javascript que irá gerar automaticamente o caminho da imagem a ser exibida.
```

No campo `input` foi adicionada uma máscara utilizando javascript para formatar o padrão de números do cartão de crédito, para isso utilizei o seguinte código:

```console
crie uma máscara no input que aceite apenas números no formato "9999 9999 9999 9999"
```

#### `about.html`

A página `about.html` foi editada por meio do assistente e colocada uma seção "Sobre mim", o seguinte comando foi utilizado:

```console
crie uma section com o título "Sobre mim" que possua uma estrutura adequada para que eu possa colocar algumas informações, inclusive com link do github e linkedin.
```

### Script `scripts.js`

O script de pesquisa da bandeira do cartão também foi gerada automaticamento pelo GitHub Copilot no momento que pedi que alterasse a página `index.html`, porém, ele gerou um código básico com uma verificação por um dígito inicial, utilizei o seguinte código para gerar a verificação por meio do regex oficial:

```console
Altere a função de verificação do número do cartão utilizando a identificação oficial da bandeira do cartão de crédito.
```

Posteriormente, foi solicitado ao assistente que fosse incluído na função de validação mais opções de cartões de crédito com o seguinte comando:

```console
Acrescente à função de validação os cartões:

Diners Club
Discover
EnRoute
JCB
Voyager
HyperCard
Aura
Elo
```

O código para limpar o campo ao clicar no botão, também foi criado pelo assistente utilizando o seguinte comando:

```console
Crie uma função para o botão limpar, que ao ser clicado, deve limpar o conteúdo do input.
```

## Estrutura do Projeto

```
verifica-cartao-credito
├── src
│   ├── index.html        # Página principal do site
│   ├── about.html        # Página "Sobre"
│   ├── css
│   │   └── styles.css    # Folha de estilo para as páginas HTML
│   ├── js
│   │   └── scripts.js     # Scripts JavaScript para interatividade
│   └── assets
│       |── README.md      # Documentação para a pasta de assets
│       └── img            # Pasta para imagens
│            └── flags     # Pasta para imagens das bandeiras dos cartões
├── README.md              # Documentação do projeto
```

## Instruções de Configuração

1. **Clone o repositório**:

   ```bash
   git clone <https://github.com/Bambatera/verifica-cartao-credito.git>
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd verifica-cartao-credito
   ```

3. **Abra o arquivo `src/index.html` em um navegador** para visualizar a página principal.

4. **Acesse `src/about.html`** para visualizar a página "Sobre".

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Licença

Por se tratar de um projeto de estudo, não é necessária uma licença para uso ou compartilhamento.

Projeto gerado por IA.