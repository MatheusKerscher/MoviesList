# MoviesList
Esse aplicativo foi desenvolvido com o intuito de aprimorar meus conhecimentos com Angular, TypeScript, JavaScript, HTML, SASS, CSS, Bootstrap e consumo de API.

## Tecnologias Utilizadas

Para desenvolver esse site as seguintes tecnologias foram utilizadas:
- [Angular](https://angular.io/);
- [Bootstrap](https://getbootstrap.com/);
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML);
- [SASS](https://sass-lang.com/);
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [TypeScript](https://www.typescriptlang.org/);
- [Angular Bootstrap](https://ng-bootstrap.github.io/#/home);
- [Angular Fontawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome);
- [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction).

## Como o site funciona

Ao abrir o site você irá se deparar com essa tela:

![Home](/src/assets/imgsForReadme/home-1.png)

Você poderá escolher o gênero do filme, o idioma em que as informações do filme serão exibidas e a ordem em que os filmes serão exibidos como mostra as imagens a seguir:

![Home](/src/assets/imgsForReadme/home-2.png)
![Home](/src/assets/imgsForReadme/home-3.png)
![Home](/src/assets/imgsForReadme/home-4.png)

Após realizar a pesquisa será exibido os filmes, semelhante a imagem a seguir:

![Home](/src/assets/imgsForReadme/home-5.png)

Você pode clicar em um card para ver mais informações sobre o filme, como mostra a imagem a seguir:

![Home](/src/assets/imgsForReadme/home-6.png)

Você também pode usar a paginação para ver mais filmes do resultado da pesquisa, como na imagem a seguir:

![Home](/src/assets/imgsForReadme/home-7.png)

Por fim, indo para a página "sobre", você irá ver algumas informações sobre os dados apresentados na página, informações sobre a [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) e um pequeno manual de uso do site para realizar a pesquisa, semelhante a imagem a seguir:

![Home](/src/assets/imgsForReadme/sobre-1.png)
![Home](/src/assets/imgsForReadme/sobre-2.png)

## O que é a TMDB API

A The Movie Database API [(TMDB API)](https://developers.themoviedb.org/3/getting-started/introduction) foi a API escolhida para ser consumida nesse projeto. Ela traz diversos dados sobre os mais variados filmes existentes no planeta. Os dados que foram usados nesse projeto foram:
- Avaliação;
- Banner do filme;
- Data de lançamento;
- Quantidade de avaliações;
- Título;
- Um breve resumo sobre o filme.

## Instalação e Uso

### Instalação e uso

1. Instalar [Node.Js](https://nodejs.org/en) e NPM

2. Instalar o Angular CLI

```sh
npm install -g @angular/cli
```

4. Clone esse repositório e acesse a pasta

```sh
git clone https://github.com/MatheusKerscher/MoviesList.git

cd MoviesList
```

4. Instale os pacotes NPM

```sh

npm install

```

5. Executar o projeto

```sh

ng s -o

```
