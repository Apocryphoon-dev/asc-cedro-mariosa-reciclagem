# Imagens Utilizadas no Site ASC Ambiental

## 📸 Banners Hero (Unsplash - Gratuitas)

### Homepage (index.html)
- **Imagem**: Caminhão de reciclagem/coleta
- **URL**: https://images.unsplash.com/photo-1532996122724-e3c354a0b15b
- **Tema**: Gestão de resíduos e coleta

### Página Sobre (sobre.html)
- **Imagem**: Equipe trabalhando em sustentabilidade
- **URL**: https://images.unsplash.com/photo-1542601906990-b4d3fb778b09
- **Tema**: Trabalho em equipe e meio ambiente

### Página Serviços (servicos.html)
- **Imagem**: Instalação de reciclagem/separação de resíduos
- **URL**: https://images.unsplash.com/photo-1611284446314-60a58ac0deb9
- **Tema**: Processo industrial de reciclagem

### Página Contato (contato.html)
- **Imagem**: Ambiente de escritório moderno
- **URL**: https://images.unsplash.com/photo-1497366216548-37526070297c
- **Tema**: Profissionalismo e atendimento

---

## 🔄 Como Substituir por Imagens Próprias

### Opção 1: Substituir URLs no CSS

1. Abra o arquivo `css/styles.css` (para homepage)
2. Abra o arquivo `css/pages.css` (para páginas internas)
3. Localize as URLs do Unsplash
4. Substitua pelas URLs das suas imagens

```css
/* Exemplo - Homepage */
.hero {
    background: linear-gradient(...),
                url('SUA_IMAGEM_AQUI.jpg') center/cover;
}
```

### Opção 2: Usar Imagens Locais

1. Crie a pasta `images/hero/` no projeto
2. Salve suas imagens:
   - `home-hero.jpg` (1920x600px recomendado)
   - `sobre-hero.jpg`
   - `servicos-hero.jpg`
   - `contato-hero.jpg`

3. Atualize o CSS:

```css
/* Homepage */
.hero {
    background: linear-gradient(...),
                url('../images/hero/home-hero.jpg') center/cover;
}

/* Sobre */
body.sobre-page .page-header {
    background-image: linear-gradient(...),
                      url('../images/hero/sobre-hero.jpg');
}
```

---

## 📐 Especificações Técnicas

### Tamanhos Recomendados
- **Hero Banners**: 1920x600px (ratio 16:5)
- **Formato**: JPG (otimizado) ou WebP
- **Peso máximo**: 200KB por imagem
- **Qualidade**: 80-90%

### Otimização
Use ferramentas como:
- TinyPNG (tinypng.com)
- Squoosh (squoosh.app)
- ImageOptim (para Mac)

### Temas Sugeridos para Fotos
- Caminhões de coleta
- Centros de triagem
- Equipe uniformizada
- Materiais recicláveis organizados
- Instalações da empresa
- Certificações ambientais

---

## 🎨 Overlay e Efeitos

As imagens possuem:
- **Overlay verde escuro** (85-90% de opacidade) para manter legibilidade
- **Textura sutil** em SVG por cima
- **Text-shadow** nos textos para destaque

Isso garante que o texto branco seja sempre legível sobre qualquer imagem!
