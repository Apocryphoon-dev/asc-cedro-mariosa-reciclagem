# Site de Gestão de Resíduos

Site institucional completo para consultoria especializada em gestão de resíduos sólidos, coleta seletiva e reciclagem, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 🎨 Design e Cores

O site utiliza uma paleta de **tons de verde e preto** que refletem sustentabilidade e consciência ambiental:
- **Verde Principal**: `#2d5016`
- **Verde Accent**: `#4caf50`
- **Preto**: `#0a0a0a`
- **Cinzas**: Variações para contraste e legibilidade

## 📁 Estrutura do Projeto

```
site-gordo/
├── index.html              # Página inicial
├── sobre.html              # Quem somos
├── servicos.html           # Serviços detalhados
├── contato.html            # Formulário de contato
├── css/
│   ├── reset.css          # Normalização básica
│   ├── styles.css         # Estilos principais
│   └── pages.css          # Estilos das páginas internas
└── js/
    └── main.js            # Interatividade e animações
```

## ✨ Características

### Acessibilidade (a11y)
- ✅ HTML semântico (`nav`, `main`, `section`, `footer`)
- ✅ Labels descritivos em todos os campos de formulário
- ✅ Atributos `aria-label` nos botões e links
- ✅ Navegação por teclado garantida
- ✅ Contraste adequado (WCAG AA)

### Responsividade
- ✅ Design mobile-first
- ✅ Menu hambúrguer para dispositivos móveis
- ✅ Grid layouts adaptativos
- ✅ Imagens e elementos fluidos
- ✅ Media queries para tablets e desktops

### Performance
- ✅ CSS modular e organizado
- ✅ JavaScript otimizado com event delegation
- ✅ Lazy loading de animações
- ✅ Sem dependências externas (100% vanilla)
- ✅ Assets leves e otimizados

### SEO
- ✅ Meta tags descritivas
- ✅ Títulos únicos por página
- ✅ Estrutura de headings hierárquica
- ✅ URLs semânticas
- ✅ Alt texts em elementos visuais

## 🚀 Como Usar

Basta abrir o arquivo `index.html` no navegador. Não precisa de servidor ou build.

### Para Desenvolvimento Local

Se preferir usar um servidor local:

```powershell
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📄 Páginas

### 1. **index.html** - Página Inicial
- Hero section com call-to-action
- Benefícios da gestão sustentável
- Serviços resumidos (coleta, reciclagem, consultoria)
- Estatísticas de impacto ambiental
- Depoimentos de clientes
- CTA final

### 2. **sobre.html** - Quem Somos
- História da empresa
- Missão, Visão e Valores (foco em sustentabilidade)
- Diferenciais competitivos
- Informações sobre a equipe especializada

### 3. **servicos.html** - Serviços
- Detalhamento completo de cada serviço:
  - Coleta Seletiva Empresarial
  - Reciclagem e Destinação Final
  - Consultoria Ambiental e PGRS
  - Economia Circular e Logística Reversa
- Processo de trabalho (5 etapas)

### 4. **contato.html** - Contato
- Formulário de diagnóstico gratuito
- Informações de contato (email, telefone, WhatsApp)
- Como funciona o diagnóstico (4 passos)
- FAQ sobre gestão de resíduos

## 🎯 Funcionalidades JavaScript

### Navegação Mobile
- Menu responsivo com botão hambúrguer
- Animação suave de abertura/fechamento
- Fecha automaticamente ao clicar em links

### Animações de Scroll
- Elementos aparecem ao rolar a página (fade in + slide up)
- Intersection Observer para performance
- Animação de contadores nas estatísticas

### Validação de Formulário
- Validação em tempo real
- Feedback visual de erros
- Validação de email com regex
- Campos obrigatórios destacados

### Efeitos Visuais
- Navbar com sombra dinâmica no scroll
- Cards com hover effect
- Transições suaves em botões e links

## 🛠️ Personalização

### Alterar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --primary-green: #2d5016;
    --accent-green: #4caf50;
    --black: #0a0a0a;
    /* ... outras cores */
}
```

### Alterar Conteúdo

Textos e conteúdos estão diretamente nos arquivos HTML. Busque por:
- Títulos: tags `<h1>`, `<h2>`, `<h3>`
- Parágrafos: tags `<p>`
- Links: tags `<a href="...">`

### Adicionar Imagens Reais

Substitua os placeholders `.image-placeholder` por tags `<img>`:

```html
<!-- De: -->
<div class="image-placeholder">
    <span>🚀</span>
    <p>Texto</p>
</div>

<!-- Para: -->
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem">
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Próximos Passos Sugeridos

1. **Adicionar imagens reais** nos placeholders
2. **Integrar formulário** com backend (ex: Formspree, EmailJS)
3. **Google Analytics** para tracking
4. **Configurar domínio** e hospedagem
5. **Otimizar imagens** (WebP/AVIF)
6. **Adicionar sitemap.xml** e robots.txt
7. **Implementar PWA** (Service Worker, manifest)

## 📞 Integrações Prontas

O site está preparado para integrar:
- Google Analytics
- Google Tag Manager
- Meta Pixel (Facebook)
- WhatsApp Business
- CRM (via formulário)
- Chat online (Tawk.to, Zendesk)

## 📝 Licença

Projeto livre para uso comercial e pessoal.

---

**Desenvolvido com ❤️ e 🌱 para um mundo mais sustentável**
