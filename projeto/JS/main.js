document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o link do botão de reprodução e o container do vídeo
    const playButton = document.getElementById('play-button');
    const videoContainer = document.getElementById('video-container');

    // Adiciona um ouvinte de evento de clique no botão
    playButton.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Obtém a URL do vídeo a partir do href do link
        const videoUrl = playButton.getAttribute('href');

        // Cria o elemento iframe para incorporar o vídeo do YouTube
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl.replace("watch?v=", "embed/"); // Transforma a URL para o formato embed do YouTube
        iframe.width = 700;
        iframe.height = 340;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Limpa o container e insere o iframe
        videoContainer.innerHTML = ''; // Remove qualquer conteúdo anterior
        videoContainer.appendChild(iframe);
    });
    
    
});

document.addEventListener('click', function(event) {
    // Verifica se o clique foi fora do vídeo e do botão de play
    if (isVideoOpen && !videoContainer.contains(event.target) && event.target !== playButton) {
        videoContainer.innerHTML = ''; // Remove o vídeo do container
        isVideoOpen = false; // Define que o vídeo está fechado
    }
});



