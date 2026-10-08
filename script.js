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

// ===== localStorage: salvar e restaurar a última rota =====
const getRoute = () => window.location.hash.slice(1) || 'inicio';

function saveRoute() {
  try {
    localStorage.setItem('lastRoute', getRoute());
    localStorage.setItem('lastRouteScroll', String(window.scrollY));
  } catch (error) {
    // localStorage pode estar indisponível (modo privado, cota cheia).
  }
}

function restoreRoute() {
  try {
    const savedRoute = localStorage.getItem('lastRoute');
    const savedScroll = Number(localStorage.getItem('lastRouteScroll')) || 0;
    const routeExists =
      savedRoute === 'inicio' || sections.some((section) => section.id === savedRoute);

    // Só restaura se o usuário abriu o site sem hash e a rota salva é válida.
    if (!window.location.hash && savedRoute && savedRoute !== 'inicio' && routeExists) {
      window.history.replaceState({}, '', `#${savedRoute}`);
      renderPage();
    }

    // Restaura a rolagem apenas se a rota atual for a mesma que foi salva.
    if (getRoute() === savedRoute) {
      window.scrollTo(0, savedScroll);
    }
  } catch (error) {
    // Ignora erros de leitura.
  }
}

// Restaura primeiro, antes de qualquer gravação sobrescrever os valores salvos.
restoreRoute();
saveRoute();

// Salva ao trocar de rota (esses listeners rodam depois dos que já existem acima).
navigation.addEventListener('click', saveRoute);
window.addEventListener('popstate', saveRoute);

// Salva a posição da rolagem ao sair ou esconder a página.
window.addEventListener('pagehide', saveRoute);