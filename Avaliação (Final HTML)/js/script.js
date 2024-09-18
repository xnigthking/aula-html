// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Elementos da interface
    const flashLogo = document.getElementById('toggleMenu'); // Botão para alternar o menu
    const menuLeft = document.querySelector('.menu-left'); // Menu de navegação à esquerda
    const modal = document.getElementById('trailerModal'); // Modal que contém o trailer
    const closeButton = document.querySelector('.close'); // Botão para fechar o modal
    const openModalButtons = document.querySelectorAll('#openTrailerModal'); // Botões que abrem o modal do trailer
    const videoFundo = document.getElementById('videoFundo'); // Vídeo de fundo da página
    const toggleSoundButton = document.getElementById('toggleSound'); // Botão para ativar/desativar som
    let lastFocusedElement; // Armazena o último elemento que teve foco, útil para acessibilidade

    // Funcionalidade para alternar o menu ao clicar no logo
    if (flashLogo && menuLeft) {
        flashLogo.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a ação padrão do link
            menuLeft.classList.toggle('show'); // Alterna a classe 'show' para exibir ou ocultar o menu
        });
    }

    // Função para abrir o modal
    const openModal = () => {
        if (modal) {
            lastFocusedElement = document.activeElement; // Salva o último elemento focado antes de abrir o modal
            modal.style.display = 'block'; // Exibe o modal
            modal.setAttribute('aria-hidden', 'false'); // Atualiza atributo de acessibilidade
            modal.querySelector('video').focus(); // Foca no vídeo dentro do modal
            document.body.classList.add('no-scroll'); // Adiciona classe para impedir a rolagem do fundo
        }
    };

    // Função para fechar o modal
    const closeModal = () => {
        if (modal) {
            modal.style.display = 'none'; // Oculta o modal
            modal.setAttribute('aria-hidden', 'true'); // Atualiza atributo de acessibilidade
            document.body.classList.remove('no-scroll'); // Remove a classe que impedia a rolagem do fundo

            // Pausa o vídeo e volta para o início
            const video = modal.querySelector('video');
            if (video) {
                video.pause(); // Pausa o vídeo
                video.currentTime = 0; // Reinicia o vídeo para o início
            }

            // Restaura o foco para o último elemento que tinha foco
            if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
        }
    };

    // Adiciona ouvintes de eventos aos botões que abrem o modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a ação padrão do link
            openModal(); // Chama a função para abrir o modal
        });
    });

    // Adiciona ouvinte de eventos ao botão de fechar o modal
    if (closeButton) {
        closeButton.addEventListener('click', closeModal); // Chama a função de fechar ao clicar
    }

    // Fecha o modal ao clicar fora do conteúdo do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(); // Chama a função de fechar se o clique for fora do modal
        }
    });

    // Fecha o modal ao pressionar a tecla Esc
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(); // Chama a função de fechar se a tecla Esc for pressionada
        }
    });

    // Botão de alternância de som
    if (toggleSoundButton && videoFundo) {
        const updateSoundButton = () => {
            // Atualiza o texto do botão com base no estado de mudo do vídeo
            toggleSoundButton.textContent = videoFundo.muted ? '🔊' : '🔇'; // Define ícone conforme o estado do som
        };

        // Define o texto inicial do botão ao carregar
        updateSoundButton();

        // Funcionalidade para alternar som
        toggleSoundButton.addEventListener('click', () => {
            videoFundo.muted = !videoFundo.muted; // Alterna o estado de mudo do vídeo
            updateSoundButton(); // Atualiza o texto do botão após a alternância
        });
    }
});
