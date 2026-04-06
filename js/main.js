// ==========================================
// NAVEGAÇÃO MOBILE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // ==========================================
    // FORMULÁRIO DINÂMICO - TIPO DE CLIENTE
    // ==========================================
    const tipoCliente = document.getElementById('tipo-cliente');
    const empresaField = document.getElementById('empresa-field');
    const cargoField = document.getElementById('cargo-field');
    const enderecoField = document.getElementById('endereco-field');
    
    if (tipoCliente) {
        // Detectar parâmetro na URL
        const urlParams = new URLSearchParams(window.location.search);
        const tipoParam = urlParams.get('tipo');
        
        if (tipoParam === 'empresa') {
            tipoCliente.value = 'empresa';
            toggleClienteFields('empresa');
        } else if (tipoParam === 'residencial') {
            tipoCliente.value = 'residencial';
            toggleClienteFields('residencial');
        }
        
        // Evento de mudança no select
        tipoCliente.addEventListener('change', (e) => {
            toggleClienteFields(e.target.value);
        });
    }
    
    function toggleClienteFields(tipo) {
        if (!empresaField || !cargoField || !enderecoField) return;
        
        const empresaInput = document.getElementById('empresa');
        const enderecoInput = document.getElementById('endereco');
        
        if (tipo === 'empresa') {
            empresaField.style.display = 'block';
            cargoField.style.display = 'block';
            enderecoField.style.display = 'none';
            
            if (empresaInput) empresaInput.required = true;
            if (enderecoInput) enderecoInput.required = false;
        } else if (tipo === 'residencial') {
            empresaField.style.display = 'none';
            cargoField.style.display = 'none';
            enderecoField.style.display = 'block';
            
            if (empresaInput) empresaInput.required = false;
            if (enderecoInput) enderecoInput.required = true;
        } else {
            empresaField.style.display = 'none';
            cargoField.style.display = 'none';
            enderecoField.style.display = 'none';
            
            if (empresaInput) empresaInput.required = false;
            if (enderecoInput) enderecoInput.required = false;
        }
    }
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    }
});

// ==========================================
// ANIMAÇÃO DE SCROLL SUAVE PARA SEÇÕES
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação a elementos específicos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.benefit-card, .service-card, .testimonial-card, .stat-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==========================================
// ANIMAÇÃO DE CONTADORES (ESTATÍSTICAS)
// ==========================================
const animateCounter = (element, target) => {
    const duration = 2000; // 2 segundos
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
};

const formatNumber = (num) => {
    if (num >= 1000) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return num.toString();
};

// Observar estatísticas e animar quando visíveis
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.dataset.animated) {
                statNumber.dataset.animated = 'true';
                const text = statNumber.textContent.trim();
                const hasPercent = text.includes('%');
                const hasPlus = text.includes('+');
                const numValue = parseInt(text.replace(/\D/g, ''));
                
                statNumber.textContent = '0';
                
                const timer = setInterval(() => {
                    const current = parseInt(statNumber.textContent);
                    if (current < numValue) {
                        statNumber.textContent = Math.min(current + Math.ceil(numValue / 50), numValue);
                    } else {
                        clearInterval(timer);
                        let finalText = numValue.toString();
                        if (hasPercent) finalText += '%';
                        if (hasPlus) finalText += '+';
                        statNumber.textContent = finalText;
                    }
                }, 30);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => statsObserver.observe(card));
});

// ==========================================
// VALIDAÇÃO DE FORMULÁRIO (para página de contato)
// ==========================================
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        // Validar email
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });
    
    return isValid;
};

// Escutar envios de formulários
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (validateForm(form)) { 
                // Envio específico para o formulário de contato: abrir cliente de email com os dados
                if (form.id === 'contactForm') {
                    const endpoint = form.dataset.formspree || '';
                    const tipo = document.getElementById('tipo-cliente')?.value || '';
                    const nome = document.getElementById('nome')?.value || '';
                    const email = document.getElementById('email')?.value || '';
                    const telefone = document.getElementById('telefone')?.value || '';
                    const empresa = document.getElementById('empresa')?.value || '';
                    const cargo = document.getElementById('cargo')?.value || '';
                    const endereco = document.getElementById('endereco')?.value || '';
                    const servico = document.getElementById('servico')?.value || '';
                    const mensagem = document.getElementById('mensagem')?.value || '';

                    // Se um endpoint do Formspree estiver configurado, enviar silenciosamente via fetch
                    if (endpoint && !endpoint.includes('yourFormId')) {
                        const formData = new FormData();
                        formData.append('Tipo de Cliente', tipo);
                        formData.append('Nome', nome);
                        formData.append('Email', email);
                        formData.append('Telefone', telefone);
                        if (empresa) formData.append('Empresa', empresa);
                        if (cargo) formData.append('Cargo', cargo);
                        if (endereco) formData.append('Endereço', endereco);
                        formData.append('Serviço de Interesse', servico);
                        formData.append('Mensagem', mensagem);
                        formData.append('_subject', `Solicitação de Diagnóstico - ${nome || tipo}`);
                        formData.append('_replyto', email);

                        fetch(endpoint, {
                            method: 'POST',
                            body: formData,
                            headers: {
                                'Accept': 'application/json'
                            }
                        }).then(async (response) => {
                            if (response.ok) {
                                // envio bem-sucedido
                                alert('Solicitação enviada com sucesso! Obrigado.');
                                form.reset();
                            } else {
                                // tentar obter mensagem de erro
                                const data = await response.json().catch(() => ({}));
                                console.error('Formspree error', data);
                                alert('Ocorreu um erro ao enviar o formulário. Tente novamente ou use o WhatsApp.');
                            }
                        }).catch((err) => {
                            console.error('Fetch error', err);
                            alert('Falha na conexão. Tente novamente mais tarde.');
                        });
                    } else {
                        // Sem endpoint configurado: fallback para mailto
                        const subject = `Solicitação de Diagnóstico - ${nome || tipo}`;
                        let body = '';
                        body += `Tipo de Cliente: ${tipo}\n`;
                        body += `Nome: ${nome}\n`;
                        body += `Email: ${email}\n`;
                        body += `Telefone: ${telefone}\n`;
                        if (empresa) body += `Empresa: ${empresa}\n`;
                        if (cargo) body += `Cargo: ${cargo}\n`;
                        if (endereco) body += `Endereço: ${endereco}\n`;
                        body += `Serviço de Interesse: ${servico}\n\n`;
                        body += `Mensagem:\n${mensagem}\n\n`;
                        body += `Enviado via site ASC - Cedro Mariosa Reciclagem`;

                        const mailto = `mailto:ricardo.rc15@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.location.href = mailto;
                        setTimeout(() => form.reset(), 1000);
                    }
                } else {
                    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
                    form.reset();
                }
            } else {
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            }
        });
    });
});
