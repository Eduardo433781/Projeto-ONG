🌱 ONG Esperança

Este projeto consiste no desenvolvimento de um site institucional para a ONG Esperança, criado como parte dos meus estudos e práticas em desenvolvimento web.

O projeto tem como objetivo colocar em prática conceitos de HTML5, CSS3 e JavaScript, desenvolvendo uma página organizada, responsiva e visualmente agradável. Durante o desenvolvimento, também estou explorando ferramentas como Node.js e Vite, além de aplicar conhecimentos relacionados à estrutura semântica, formulários, layouts, navegação dinâmica e boas práticas de desenvolvimento.

«🚧 Projeto em desenvolvimento: o site poderá receber novas funcionalidades, melhorias visuais e ajustes conforme meus conhecimentos em desenvolvimento web evoluírem.»

---

🎯 Objetivo do Projeto

O principal objetivo é desenvolver uma página institucional que represente uma organização não governamental de forma simples e organizada, utilizando o projeto como uma oportunidade de aprendizado.

Durante o desenvolvimento, pretendo praticar:

- 🧑‍💻 Estruturação de páginas com HTML5;
- 🎨 Estilização utilizando CSS3;
- ⚙️ Interatividade e navegação com JavaScript;
- 🧭 Criação de uma Single Page Application (SPA);
- 📦 Utilização do Node.js e do Vite no ambiente de desenvolvimento;
- 📐 Organização de layouts;
- 📱 Desenvolvimento responsivo;
- 🧩 Utilização de elementos semânticos;
- 📝 Criação e organização de formulários;
- ♿ Aplicação de conceitos básicos de acessibilidade;
- 🗂️ Organização dos arquivos do projeto;
- ✅ Validação e correção do código;
- 📚 Aplicação prática dos conceitos estudados.

---

💻 Tecnologias e Ferramentas Utilizadas

Atualmente, o projeto utiliza ou explora as seguintes tecnologias e ferramentas:

- HTML5 — responsável pela estrutura e organização semântica da página;
- CSS3 — utilizado para estilização, layout, responsividade e apresentação visual;
- JavaScript puro — responsável pela interatividade e navegação dinâmica entre as seções;
- Node.js — ambiente de execução do JavaScript fora do navegador, utilizado neste projeto para executar ferramentas de desenvolvimento e viabilizar a configuração do Vite;
- Vite — ferramenta de desenvolvimento que oferece um servidor local, atualização rápida durante a edição dos arquivos e recursos para preparar o projeto para produção;
- VS Code — editor de código utilizado para desenvolver e organizar os arquivos;
- W3C Validator — ferramenta utilizada para verificar a estrutura e a conformidade do HTML.

Entre os recursos estudados e utilizados estão:

- HTML semântico;
- Formulários e validação de campos;
- CSS Grid;
- Flexbox;
- Media Queries;
- Breakpoints responsivos;
- Tipografia e cores;
- Organização visual;
- Manipulação do DOM;
- Eventos ("click", "popstate");
- History API ("pushState");
- Roteamento por hash;
- Servidor local de desenvolvimento;
- Configuração de ferramentas com Node.js;
- Utilização do Vite no fluxo de desenvolvimento.

---

🧱 Estrutura do Site

A página foi planejada utilizando diferentes elementos do HTML5 para organizar o conteúdo de maneira semântica.

Entre os principais elementos utilizados estão:

- "<header>" — área de apresentação e cabeçalho;
- "<nav>" — estrutura de navegação;
- "<main>" — conteúdo principal da página, onde o JavaScript exibe a seção selecionada;
- "<section>" — organização das diferentes partes do conteúdo;
- "<form>" — formulário para entrada de informações;
- "<fieldset>" e "<legend>" — agrupamento e identificação dos campos do formulário;
- "<footer>" — informações finais da página.

A utilização desses elementos tem como objetivo deixar o código mais organizado, compreensível e semanticamente adequado.

---

⚙️ JavaScript e Single Page Application (SPA)

O site foi desenvolvido com uma abordagem de Single Page Application (SPA): a ideia é permitir que o usuário navegue entre diferentes seções sem precisar recarregar a página inteira a cada clique.

Para isso, utilizo JavaScript puro, com roteamento por hash ("#inicio", "#projetos" etc.) combinado com recursos da History API.

Escolhi essa abordagem porque o projeto é pequeno e não exige necessariamente um framework. Dessa forma, consigo estudar o funcionamento da navegação dinâmica e compreender melhor como o JavaScript interage com o navegador.

🧭 Como funciona

1. Guardar as seções: o conteúdo HTML das seções é armazenado antes das alterações no elemento "<main>".
2. Interceptar os cliques: um listener no menu identifica os links selecionados e impede o comportamento padrão de navegação.
3. Atualizar a URL: o "history.pushState()" registra uma nova entrada no histórico do navegador.
4. Renderizar o conteúdo: a função "renderPage()" identifica a rota e apresenta a seção correspondente.
5. Voltar e avançar: o evento "popstate" permite atualizar o conteúdo quando o usuário utiliza os botões de navegação do navegador.

🧩 Função principal: "renderPage()"

A função "renderPage()" identifica a rota atual e atualiza o conteúdo exibido dentro do "<main>".

- Na rota "inicio", exibe todas as seções;
- Nas demais rotas, exibe somente a seção correspondente;
- Quando a rota não existe, apresenta uma mensagem de página não encontrada.

A função também atualiza o link ativo no menu e leva a visualização para o início do conteúdo.

O código JavaScript responsável por essa funcionalidade está organizado no arquivo "script.js".

👍 Por que essa abordagem?

- Não exige um framework JavaScript;
- Permite estudar a manipulação do DOM;
- Ajuda a compreender eventos e delegação de eventos;
- Utiliza a URL para identificar a seção selecionada;
- Permite trabalhar com o histórico de navegação;
- Facilita a compreensão dos fundamentos de roteamento em aplicações web.

---

🟢 Node.js e Vite

Durante o desenvolvimento do projeto, comecei a estudar o Node.js e utilizei esse ambiente para configurar o Vite, ampliando meus conhecimentos sobre as ferramentas utilizadas no desenvolvimento web moderno.

Essa etapa representa um avanço no meu aprendizado, pois passei a explorar não apenas a criação das páginas, mas também a configuração do ambiente necessário para desenvolver e executar o projeto localmente.

🟢 O que é o Node.js?

O Node.js é um ambiente de execução que permite executar JavaScript fora do navegador.

Normalmente, utilizamos JavaScript no navegador para adicionar interatividade às páginas web. Com o Node.js, também podemos executar JavaScript diretamente no computador, por exemplo, para utilizar ferramentas de desenvolvimento, criar servidores e desenvolver aplicações de back-end.

Neste projeto, o Node.js é utilizado principalmente como parte do ambiente de desenvolvimento, permitindo executar ferramentas como o Vite.

⚡ O que é o Vite?

O Vite é uma ferramenta de desenvolvimento web que facilita a execução e a preparação de projetos.

Entre seus recursos estão:

- Inicialização de um servidor local de desenvolvimento;
- Atualização rápida das alterações realizadas nos arquivos;
- Integração com módulos JavaScript;
- Recursos para gerar uma versão de produção do projeto;
- Organização do fluxo de desenvolvimento.

Com o servidor local, consigo abrir o projeto no navegador e acompanhar as alterações realizadas no código durante o desenvolvimento.

🔗 Como o Node.js e o Vite se relacionam?

Embora sejam utilizados em conjunto, Node.js e Vite não são a mesma coisa.

O Node.js fornece o ambiente necessário para executar o Vite. Já o Vite fornece ferramentas específicas para facilitar o desenvolvimento da aplicação web.

De forma simplificada, o funcionamento é o seguinte:

1. Instalo o Node.js no computador;
2. Utilizo o npm, que acompanha a instalação padrão do Node.js, para gerenciar pacotes e dependências;
3. Instalo e configuro o Vite no projeto;
4. Utilizo os comandos definidos no arquivo "package.json" para iniciar o servidor de desenvolvimento ou gerar a versão de produção;
5. Acesso o projeto pelo navegador para testar seu funcionamento.

É importante destacar que o JavaScript executado no navegador continua sendo responsável pelas funcionalidades da interface. O Node.js não precisa executar toda a lógica da página para que ela funcione.

📚 O que estou aprendendo com essa etapa?

- Diferença entre JavaScript no navegador e JavaScript executado pelo Node.js;
- Utilização do npm para gerenciar dependências;
- Instalação e configuração de ferramentas;
- Funcionamento do arquivo "package.json";
- Utilização de scripts para executar comandos;
- Inicialização de um servidor local;
- Diferença entre ambiente de desenvolvimento e versão de produção;
- Processo de preparação de uma aplicação web para publicação.

Essa experiência também ajuda a compreender como ferramentas de desenvolvimento se integram ao fluxo de trabalho de um projeto web.

---

📱 Responsividade

Um dos objetivos do projeto é fazer com que a página possa ser visualizada adequadamente em diferentes dispositivos.

Para isso, estou utilizando recursos do CSS como:

- CSS Grid;
- Flexbox;
- Media Queries;
- Breakpoints;
- Unidades relativas;
- Ajustes de layout para diferentes tamanhos de tela.

A proposta é permitir que a estrutura da página se adapte desde telas menores, como smartphones, até telas maiores de computadores.

---

📝 Formulário

O projeto também possui uma área destinada ao preenchimento de informações pelo usuário.

O formulário é utilizado como uma oportunidade para praticar diferentes tipos de campos e recursos de validação nativos do HTML5.

Os campos são organizados utilizando elementos como "<fieldset>" e "<legend>", permitindo separar informações relacionadas em grupos.

Entre os conceitos estudados estão:

- "type="text"";
- "type="email"";
- "type="date"";
- "type="tel"";
- "pattern";
- "required";
- Validação nativa do HTML5.

Esses recursos permitem que determinadas informações sejam verificadas pelo próprio navegador antes do envio do formulário.

---

🎨 Layout e Design

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

🤖 Uso de Inteligência Artificial

A Inteligência Artificial é utilizada como uma ferramenta auxiliar durante o desenvolvimento do projeto.

Ela pode apoiar meus estudos e ajudar na compreensão de conceitos que estou aprendendo.

Durante o desenvolvimento, a IA pode auxiliar em atividades como:

- 💡 Explicação de conceitos de HTML, CSS e JavaScript;
- 🔎 Identificação e compreensão de possíveis erros;
- 📝 Sugestões de organização do código;
- 🧩 Exemplos de utilização de elementos e propriedades;
- 📚 Explicação de conceitos de responsividade;
- 📐 Sugestões relacionadas a Grid, Flexbox e Media Queries;
- ♿ Orientações sobre semântica e acessibilidade;
- 🔧 Sugestões de melhorias e alternativas para determinadas soluções;
- 🧠 Apoio na interpretação dos requisitos do projeto;
- 📦 Explicação sobre ferramentas como Node.js, npm e Vite.

📌 A IA como ferramenta de aprendizado

A utilização de IA não tem como objetivo substituir o processo de aprendizado.

As sugestões fornecidas são utilizadas como material de apoio, sendo analisadas, testadas e adaptadas conforme a necessidade do projeto.

Procuro compreender o funcionamento das soluções utilizadas, incluindo:

- O que determinado código faz;
- Por que determinada propriedade foi utilizada;
- Como os elementos se relacionam;
- Quais alternativas existem;
- Quais são as limitações de cada solução.

Dessa forma, a IA funciona como uma espécie de assistente de estudos, enquanto a prática e a compreensão dos conceitos continuam fazendo parte do processo de desenvolvimento.

---

✅ Validação

A validação do projeto também faz parte do processo de desenvolvimento.

O código HTML é verificado utilizando o W3C Validator, buscando identificar problemas relacionados à estrutura e à utilização correta dos elementos HTML.

Quando são encontrados erros ou avisos relevantes, eles são analisados e corrigidos sempre que necessário.

Esse processo ajuda a compreender melhor as especificações do HTML e a importância de desenvolver páginas com uma estrutura adequada.

---

🗂️ Estrutura do Projeto

Os arquivos são organizados de forma a separar a estrutura, a estilização e o comportamento da aplicação.

A estrutura básica utilizada é:

Projeto-ong/
│
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── index.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
└── node_modules/

Observação: os arquivos "package.json" e "package-lock.json" são utilizados no gerenciamento das dependências do projeto. A pasta "node_modules/" contém os pacotes instalados pelo npm e normalmente não deve ser enviada ao GitHub.

Dependendo da configuração do Vite, também podem existir arquivos como "vite.config.js" e ".gitignore".

- "index.html" — estrutura e conteúdo semântico da página;
- "CSS/" — folhas de estilo responsáveis pela aparência e responsividade;
- "JS/" — scripts responsáveis pela interatividade e navegação dinâmica;
- "package.json" — informações do projeto, dependências e comandos disponíveis;
- "package-lock.json" — registro das versões das dependências instaladas;
- "node_modules/" — pacotes instalados pelo npm;
- "vite.config.js" — arquivo opcional de configuração do Vite;
- ".gitignore" — define arquivos e pastas que não devem ser incluídos no controle de versão;
- "README.md" — documentação do projeto.

A estrutura exata poderá mudar conforme a configuração do Vite e a evolução do projeto.

---

📚 Conceitos Praticados

Este projeto reúne diversos conceitos estudados durante minha formação em desenvolvimento web, incluindo:

- HTML5;
- HTML semântico;
- Estrutura de documentos HTML;
- Formulários;
- Tipos de campos;
- Validação HTML5;
- Atributo "pattern";
- "fieldset" e "legend";
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
- Node.js;
- npm e gerenciamento de dependências;
- Vite;
- Servidor local de desenvolvimento;
- Preparação de builds de produção;
- Organização de código;
- Acessibilidade;
- Validação pelo W3C.

---

🚀 Próximos Passos

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
- [ ] Explorar melhor os recursos do Vite;
- [ ] Compreender o processo de build para produção;
- [ ] Continuar aprendendo sobre Node.js e npm;
- [ ] Continuar aplicando os conceitos aprendidos.

---

📌 Observação

Este projeto possui principalmente um caráter educacional e experimental.

A ONG Esperança é utilizada como tema para desenvolver e praticar uma página web institucional, permitindo aplicar na prática os conceitos estudados durante o aprendizado de desenvolvimento web.

Algumas partes do projeto podem ser modificadas, refeitas ou aprimoradas conforme novos conhecimentos forem adquiridos.

O objetivo não é apenas finalizar uma página, mas utilizar o desenvolvimento como uma oportunidade para aprender, testar, identificar erros, corrigir problemas e evoluir.

---

👨‍💻 Sobre o Projeto

O projeto ONG Esperança representa uma etapa prática da minha jornada de aprendizado em desenvolvimento web.

Por meio dele, estou transformando conceitos estudados em cursos e pesquisas em uma aplicação prática, trabalhando desde a estrutura HTML até a estilização, responsividade, formulários, validação e navegação dinâmica com JavaScript.

Também estou explorando ferramentas como Node.js e Vite para compreender melhor o ambiente de desenvolvimento, a instalação de dependências e o processo de execução e preparação de aplicações web.

Além disso, utilizo ferramentas de Inteligência Artificial como apoio durante o processo, principalmente para esclarecer dúvidas, estudar conceitos e explorar diferentes soluções.

Aprender, praticar, testar, corrigir e evoluir. 🌱🚀