const occupations = ["estudante", "desenvolvedor", "programador"];
        let currentoccupationIndex = 0;
        let isDeleting = false;
        let text = '';
        let charIndex = 0;
        
        function type() {
            const currentoccupation = occupations[currentoccupationIndex];
            
            if (isDeleting) {
                // Apagando o texto
                text = currentoccupation.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Digitando o texto
                text = currentoccupation.substring(0, charIndex + 1);
                charIndex++;
            }
            
            document.getElementById('occupation').textContent = text;
            
            let typeSpeed = isDeleting ? 100 : 200;
            
            if (!isDeleting && charIndex === currentoccupation.length) {
                // Palavra completa, espera um pouco antes de começar a apagar
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Palavra apagada, passa para a próxima
                isDeleting = false;
                currentoccupationIndex = (currentoccupationIndex + 1) % occupations.length;
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // Inicia o efeito quando a página carrega
        window.onload = type;