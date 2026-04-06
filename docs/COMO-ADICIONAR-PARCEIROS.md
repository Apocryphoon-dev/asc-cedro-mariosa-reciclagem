# Como Adicionar Logos dos Parceiros

## 📍 Localização
A seção de parceiros está no arquivo `index.html`, próximo ao final da página, antes do CTA final.

## 🖼️ Estrutura Atual (Placeholder)
Atualmente existem 6 cards de exemplo com emojis:
```html
<div class="partner-card">
    <div class="partner-logo">
        <span>🏢</span>
    </div>
    <p>Parceiro 1</p>
</div>
```

## ✅ Como Adicionar Logos Reais

### Opção 1: Usando Imagens Locais

1. **Crie a pasta** `images/partners/` no projeto

2. **Salve os logos** dos parceiros nesta pasta:
   - `parceiro1.png` (ou .jpg, .svg)
   - `parceiro2.png`
   - etc.

3. **Substitua no HTML**:
```html
<div class="partner-card">
    <div class="partner-logo">
        <img src="images/partners/parceiro1.png" alt="Nome do Parceiro">
    </div>
    <p>Nome do Parceiro</p>
</div>
```

4. **Adicione este CSS** em `css/styles.css`:
```css
.partner-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10px;
}
```

### Opção 2: Usando URLs Externas

Se os logos estiverem hospedados online:

```html
<div class="partner-card">
    <div class="partner-logo">
        <img src="https://exemplo.com/logo-parceiro.png" alt="Nome do Parceiro">
    </div>
    <p>Nome do Parceiro</p>
</div>
```

## 📐 Especificações dos Logos

### Tamanho Recomendado
- **Dimensões**: 300x300px (quadrado)
- **Formato**: PNG com fundo transparente (preferível)
- **Peso**: Máximo 50KB por logo
- **Qualidade**: Alta resolução para telas Retina

### Otimização
- Use ferramentas como TinyPNG
- Prefira SVG quando possível
- Mantenha fundo transparente

## 🎨 Customização

### Adicionar ou Remover Parceiros

Para adicionar mais parceiros, copie e cole este bloco:
```html
<div class="partner-card">
    <div class="partner-logo">
        <img src="images/partners/novo-parceiro.png" alt="Novo Parceiro">
    </div>
    <p>Nome do Parceiro</p>
</div>
```

Para remover, simplesmente delete o bloco `<div class="partner-card">...</div>`

### Ajustar Número de Colunas

No arquivo `css/styles.css`, procure por `.partners-grid`:

```css
/* Desktop - 6 colunas */
.partners-grid {
    grid-template-columns: repeat(6, 1fr);
}

/* Tablet - 3 colunas */
@media (max-width: 1024px) {
    .partners-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Mobile - 2 colunas */
@media (max-width: 768px) {
    .partners-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

## 💡 Exemplo Prático

```html
<div class="partners-grid">
    <!-- Parceiro Real 1 -->
    <div class="partner-card">
        <div class="partner-logo">
            <img src="images/partners/cooperativa-recicla.png" alt="Cooperativa Recicla">
        </div>
        <p>Cooperativa Recicla</p>
    </div>
    
    <!-- Parceiro Real 2 -->
    <div class="partner-card">
        <div class="partner-logo">
            <img src="images/partners/eco-solutions.png" alt="Eco Solutions">
        </div>
        <p>Eco Solutions</p>
    </div>
    
    <!-- Continue adicionando... -->
</div>
```

## 🔗 Links nos Parceiros (Opcional)

Para adicionar links aos sites dos parceiros:

```html
<a href="https://sitedoparceiro.com" target="_blank" rel="noopener" class="partner-card">
    <div class="partner-logo">
        <img src="images/partners/parceiro.png" alt="Parceiro">
    </div>
    <p>Nome do Parceiro</p>
</a>
```

Adicione este CSS:
```css
a.partner-card {
    text-decoration: none;
}
```

---

**Pronto!** Agora é só substituir os emojis pelos logos reais dos seus parceiros! 🎉
