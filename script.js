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