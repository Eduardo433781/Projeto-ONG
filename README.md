# 🌱 ONG Esperança

Este projeto consiste no desenvolvimento de um **site institucional para a ONG Esperança**, criado como parte dos meus estudos e práticas em **desenvolvimento web**.

O projeto tem como objetivo colocar em prática conceitos de **HTML5, CSS3 e JavaScript**, desenvolvendo uma página organizada, responsiva e visualmente agradável, enquanto aplico conhecimentos relacionados à estrutura semântica, formulários, layouts, navegação dinâmica e boas práticas de desenvolvimento.

> 🚧 **Projeto em desenvolvimento:** o site poderá receber novas funcionalidades, melhorias visuais e ajustes conforme meus conhecimentos em desenvolvimento web evoluírem.

---

## 🎯 Objetivo do Projeto

O principal objetivo é desenvolver uma página institucional que represente uma organização não governamental de forma simples e organizada, ao mesmo tempo em que utilizo o projeto como uma oportunidade de aprendizado.

Durante o desenvolvimento, pretendo praticar:

- 🧑‍💻 Estruturação de páginas com HTML5;
- 🎨 Estilização utilizando CSS3;
- ⚙️ Interatividade e navegação com JavaScript;
- 🧭 Criação de uma Single Page Application (SPA);
- 📐 Organização de layouts;
- 📱 Desenvolvimento responsivo;
- 🧩 Utilização de elementos semânticos;
- 📝 Criação e organização de formulários;
- ♿ Aplicação de conceitos básicos de acessibilidade;
- 🗂️ Organização dos arquivos do projeto;
- ✅ Validação e correção do código;
- 📚 Aplicação prática dos conceitos estudados.

---

## 💻 Tecnologias Utilizadas

Atualmente, o projeto utiliza:

- **HTML5** — responsável pela estrutura e organização semântica da página;
- **CSS3** — utilizado para estilização, layout, responsividade e apresentação visual;
- **JavaScript (puro, sem frameworks)** — responsável pela navegação dinâmica entre as seções, sem recarregar a página.

Entre os recursos estudados e utilizados estão:

- HTML semântico;
- Formulários;
- Validação de campos;
- CSS Grid;
- Flexbox;
- Media Queries;
- Breakpoints responsivos;
- Tipografia;
- Cores;
- Organização visual;
- Responsividade para diferentes tamanhos de tela;
- Manipulação do DOM;
- Eventos (`click`, `popstate`);
- History API (`pushState`);
- Roteamento por hash.

---

## 🧱 Estrutura do Site

A página foi planejada utilizando diferentes elementos do HTML5 para organizar o conteúdo de maneira semântica.

Entre os principais elementos utilizados estão:

- `<header>` — área de apresentação e cabeçalho;
- `<nav>` — estrutura de navegação;
- `<main>` — conteúdo principal da página, onde o JavaScript exibe a seção selecionada;
- `<section>` — organização das diferentes partes do conteúdo;
- `<form>` — formulário para entrada de informações;
- `<fieldset>` e `<legend>` — agrupamento e identificação dos campos do formulário;
- `<footer>` — informações finais da página.

A utilização desses elementos tem como objetivo deixar o código mais organizado, compreensível e semanticamente adequado.

---

## ⚙️ JavaScript e Single Page Application (SPA)

O site foi construído como uma **Single Page Application**: a página é carregada uma única vez e, ao clicar nos links do menu, apenas o conteúdo do `<main>` é trocado, sem recarregar o navegador.

### 🧭 Abordagem adotada

Utilizei **JavaScript puro**, com **roteamento por hash** (`#inicio`, `#projetos` etc.) combinado com a **History API**. Escolhi essa abordagem porque o projeto é pequeno e não precisava de framework, o que também me permitiu entender exatamente o que acontece a cada troca de página.

### 🔄 Como funciona

1. **Guardar as seções:** ao abrir a página, o HTML de cada `<section>` (o `id` e o `outerHTML`) é salvo em um array, antes de qualquer alteração no `<main>`. Assim, o conteúdo original não se perde.
2. **Interceptar o clique:** um único `addEventListener` no menu de navegação captura o clique nos links. O `event.preventDefault()` impede o recarregamento padrão da página.
3. **Atualizar a URL:** o `history.pushState()` altera o endereço (por exemplo, `#projetos`) e cria uma entrada no histórico do navegador.
4. **Renderizar o conteúdo:** a função `renderPage()` é chamada manualmente, já que o `pushState` não dispara nenhum evento sozinho.
5. **Voltar e Avançar:** o evento `popstate` chama a mesma função, então os botões do navegador também funcionam.

### 🧩 Função principal: `renderPage()`

Ela lê a rota em `window.location.hash` (usando `inicio` como padrão) e limpa o contêiner com `main.innerHTML = ''`. Depois, injeta o novo conteúdo com `insertAdjacentHTML`:

- na rota `inicio`, mostra todas as seções;
- nas outras rotas, mostra apenas a seção cujo `id` corresponde à rota;
- se a rota não existir, exibe uma mensagem de "Página não encontrada".

No final, a função marca o link da rota atual como ativo no menu (classe `active`) e leva a tela de volta ao topo com `window.scrollTo(0, 0)`.

```javascript
const main = document.querySelector('main');
const navigation = document.querySelector('.navbar');
const links = navigation.querySelectorAll('a');

// Guarda o HTML das seções antes de alterar o conteúdo do <main>.
const sections = Array.from(main.querySelectorAll('section')).map((section) => ({
  id: section.id,
  html: section.outerHTML
}));

function renderPage() {
  const route = window.location.hash.slice(1) || 'inicio';

  // Limpa o conteúdo atual do contêiner principal.
  main.innerHTML = '';

  if (route === 'inicio') {
    // Na página inicial, exibe todas as seções.
    main.insertAdjacentHTML(
      'beforeend',
      sections.map((section) => section.html).join('')
    );
  } else {
    // Nas outras rotas, exibe apenas a seção correspondente.
    const selectedSection = sections.find((section) => section.id === route);

    if (selectedSection) {
      main.insertAdjacentHTML('beforeend', selectedSection.html);
    } else {
      main.innerHTML = '<section class="info-container"><h2>Página não encontrada</h2></section>';
    }
  }

  // Marca como ativo o link da rota atual.
  links.forEach((link) => {
    link.classList.toggle('active', link.hash === `#${route}`);
  });

  // Leva a visualização ao início do conteúdo após trocar de rota.
  window.scrollTo(0, 0);
}

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');

  if (!link || !navigation.contains(link)) {
    return;
  }

  event.preventDefault();

  // Atualiza a URL e cria uma entrada no histórico do navegador.
  window.history.pushState({}, '', link.getAttribute('href'));
  renderPage();
});

// Permite que Voltar e Avançar também troquem o conteúdo.
window.addEventListener('popstate', renderPage);

// Renderiza a rota correspondente ao endereço atual ao abrir a página.
renderPage();
```

### 👍 Por que essa escolha

- Não depende de bibliotecas e é fácil de manter;
- A URL muda a cada página, então o link pode ser compartilhado e o botão Voltar funciona;
- Um único listener no menu (delegação de eventos) atende todos os links;
- Como o conteúdo das seções é reinjetado a cada troca, listeners colocados dentro delas se perderiam. Por isso os eventos ficam no menu, que não é recriado.

---

## 📱 Responsividade

Um dos objetivos do projeto é fazer com que a página possa ser visualizada adequadamente em diferentes dispositivos.

Para isso, estou utilizando recursos do CSS como:

- **CSS Grid**;
- **Flexbox**;
- **Media Queries**;
- **Breakpoints**;
- Unidades relativas;
- Ajustes de layout para diferentes tamanhos de tela.

A proposta é permitir que a estrutura da página se adapte desde telas menores, como smartphones, até telas maiores de computadores.

---

## 📝 Formulário

O projeto também possui uma área destinada ao preenchimento de informações pelo usuário.

O formulário foi utilizado como uma oportunidade para praticar diferentes tipos de campos e recursos de validação nativos do HTML5.

Os campos são organizados utilizando elementos como `<fieldset>` e `<legend>`, permitindo separar informações relacionadas em grupos.

Também são utilizados diferentes tipos de `input`, de acordo com a finalidade de cada informação.

Entre os conceitos estudados estão:

- `type="text"`;
- `type="email"`;
- `type="date"`;
- `type="tel"`;
- `pattern`;
- `required`;
- Validação nativa do HTML5.

Esses recursos permitem que determinadas informações sejam verificadas pelo próprio navegador antes do envio do formulário.

---

## 🎨 Layout e Design

O desenvolvimento visual da página tem como objetivo criar uma interface simples, organizada e fácil de utilizar.

Durante o processo, estou praticando conceitos como:

- Organização de conteúdo;
- Hierarquia visual;
- Espaçamento;
- Cores;
- Tipografia;
- Alinhamento;
- Grid de 12 colunas;
- Flexbox;
- Adaptação do conteúdo para diferentes telas.

O design também poderá ser alterado conforme novas ideias e conhecimentos forem incorporados ao projeto.

---

## 🤖 Uso de Inteligência Artificial

A **Inteligência Artificial é utilizada como uma ferramenta auxiliar durante o desenvolvimento do projeto**.

Ela pode ser utilizada para apoiar meus estudos e ajudar na compreensão de conceitos que estou aprendendo.

Durante o desenvolvimento, a IA pode auxiliar em atividades como:

- 💡 Explicação de conceitos de HTML, CSS e JavaScript;
- 🔎 Identificação e compreensão de possíveis erros;
- 📝 Sugestões de organização do código;
- 🧩 Exemplos de utilização de elementos e propriedades;
- 📚 Explicação de conceitos de responsividade;
- 📐 Sugestões relacionadas a Grid, Flexbox e Media Queries;
- ♿ Orientações sobre semântica e acessibilidade;
- 🔧 Sugestões de melhorias e alternativas para determinadas soluções;
- 🧠 Apoio na interpretação dos requisitos do projeto.

### 📌 A IA como ferramenta de aprendizado

A utilização de IA não tem como objetivo substituir o processo de aprendizado.

As sugestões fornecidas são utilizadas como **material de apoio**, sendo analisadas, testadas e adaptadas conforme a necessidade do projeto.

Procuro compreender o funcionamento das soluções utilizadas, incluindo:

- O que determinado código faz;
- Por que determinada propriedade foi utilizada;
- Como os elementos se relacionam;
- Quais alternativas existem;
- Quais são as limitações de cada solução.

Dessa forma, a IA funciona como uma espécie de **assistente de estudos**, enquanto a prática e a compreensão dos conceitos continuam fazendo parte do processo de desenvolvimento.

---

## ✅ Validação

A validação do projeto também faz parte do processo de desenvolvimento.

O código HTML é verificado utilizando o **W3C Validator**, buscando identificar problemas relacionados à estrutura e à utilização correta dos elementos HTML.

Quando são encontrados erros ou avisos relevantes, eles são analisados e corrigidos sempre que necessário.

Esse processo ajuda a compreender melhor as especificações do HTML e a importância de desenvolver páginas com uma estrutura adequada.

---

## 🗂️ Estrutura do Projeto

Os arquivos foram organizados em pastas com o mesmo nome do tipo de arquivo, para facilitar a manutenção e deixar claro onde adicionar novos recursos (por exemplo, outro CSS para uma nova página):

```text
Projeto-ong/
│
├── README.md
├── index.html
├── CSS/
│   └── style.css
└── JS/
    └── script.js
```

- **`index.html`** — estrutura e conteúdo semântico da página;
- **`CSS/`** — folhas de estilo, responsáveis pela aparência e pela responsividade;
- **`JS/`** — scripts, responsáveis pela navegação dinâmica (SPA);
- **`README.md`** — documentação do projeto.

Essa separação mantém cada tecnologia em seu lugar (estrutura, estilo e comportamento), e a organização poderá ser modificada conforme novas páginas, imagens e recursos forem adicionados.

---

## 📚 Conceitos Praticados

Este projeto reúne diversos conceitos estudados durante minha formação em desenvolvimento web, incluindo:

- HTML5;
- HTML semântico;
- Estrutura de documentos HTML;
- Formulários;
- Tipos de campos;
- Validação HTML5;
- Atributo `pattern`;
- `fieldset` e `legend`;
- CSS3;
- Seletores;
- Box Model;
- Flexbox;
- CSS Grid;
- Grid de 12 colunas;
- Media Queries;
- Breakpoints;
- Responsividade;
- JavaScript;
- Manipulação do DOM;
- Eventos e delegação de eventos;
- History API e roteamento por hash;
- Single Page Application (SPA);
- Organização de código;
- Acessibilidade;
- Validação pelo W3C.

---

## 🚀 Próximos Passos

Algumas melhorias que pretendo realizar no projeto:

- [ ] Finalizar a estrutura da página;
- [ ] Aperfeiçoar o design;
- [ ] Melhorar a responsividade;
- [ ] Revisar a estrutura semântica;
- [ ] Melhorar a acessibilidade;
- [ ] Validar e corrigir o HTML;
- [ ] Otimizar as imagens utilizadas;
- [ ] Organizar melhor os arquivos;
- [ ] Adicionar novas seções;
- [ ] Melhorar o formulário;
- [ ] Aprimorar o CSS;
- [ ] Aprimorar o JavaScript e o roteamento;
- [ ] Continuar aplicando os conceitos aprendidos.

---

## 📌 Observação

Este projeto possui principalmente um **caráter educacional e experimental**.

A ONG Esperança é utilizada como tema para desenvolver e praticar uma página web institucional, permitindo aplicar na prática os conceitos estudados durante o aprendizado de desenvolvimento web.

Algumas partes do projeto podem ser modificadas, refeitas ou aprimoradas conforme novos conhecimentos forem adquiridos.

O objetivo não é apenas finalizar uma página, mas utilizar o desenvolvimento como uma oportunidade para **aprender, testar, identificar erros, corrigir problemas e evoluir**.

---

## 👨‍💻 Sobre o Projeto

O projeto **ONG Esperança** representa uma etapa prática da minha jornada de aprendizado em desenvolvimento web.

Por meio dele, estou transformando conceitos estudados em cursos e pesquisas em uma aplicação prática, trabalhando desde a estrutura HTML até a estilização, responsividade, formulários, validação e navegação dinâmica com JavaScript.

Também utilizo ferramentas de Inteligência Artificial como apoio durante o processo, principalmente para esclarecer dúvidas, estudar conceitos e explorar diferentes soluções.

**Aprender, praticar, testar, corrigir e evoluir. 🌱🚀**
Também utilizo ferramentas de Inteligência Artificial como apoio durante o processo, principalmente para esclarecer dúvidas, estudar conceitos e explorar diferentes soluções.

**Aprender, praticar, testar, corrigir e evoluir. 🌱🚀**
