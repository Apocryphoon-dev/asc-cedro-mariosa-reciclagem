# Como Adicionar o Logo da ASC em HD

## 📍 Passo 1: Salvar a Imagem

1. **Clique com botão direito** na imagem do logo que você compartilhou
2. **Selecione "Salvar imagem como..."**
3. **Salve com o nome:** `logo.png`
4. **Na pasta:** `site-gordo/images/`

   O caminho completo deve ser:
   ```
   c:\Users\Aprocryphoon\Desktop\site-gordo\images\logo.png
   ```

## 🎯 Especificações para Logo em HD

### Opção 1: Usar a imagem atual (mais rápido)
- Salve a imagem que você compartilhou diretamente como `logo.png`

### Opção 2: Criar versão otimizada (recomendado)
Se você tiver uma versão de maior qualidade do logo:

1. **Dimensões Recomendadas:**
   - Largura: 800-1200px (manter proporção)
   - Altura: Proporcional ao logo
   - Formato: PNG com fundo transparente

2. **Otimização:**
   - Use [TinyPNG.com](https://tinypng.com/) para reduzir o peso sem perder qualidade
   - Resolução: 144 DPI (para telas Retina/HD)
   - Peso máximo: 100KB

3. **Qualidade:**
   - Exporte com qualidade máxima
   - Mantenha fundo transparente
   - Salve em PNG-24 para melhor qualidade

## ✅ Passo 2: Verificar

Após salvar a imagem em `images/logo.png`:

1. Abra qualquer página HTML no navegador
2. O logo deve aparecer automaticamente no canto superior esquerdo
3. No mobile, o logo ficará um pouco menor (40px de altura)
4. Ao passar o mouse, leve efeito de zoom (hover)

## 🎨 Ajustes de Tamanho (Opcional)

Se o logo ficar muito grande ou pequeno, edite em `css/styles.css`:

```css
/* Desktop */
.logo-img {
    height: 50px; /* Ajuste este valor */
}

/* Mobile */
@media (max-width: 768px) {
    .logo-img {
        height: 40px; /* Ajuste este valor */
    }
}
```

## 💡 Dicas

- O logo aparecerá em **todas as 4 páginas** automaticamente
- A imagem tem efeito hover (cresce 5% ao passar o mouse)
- O código já está configurado, só falta a imagem!

---

**Pronto!** Assim que você salvar o arquivo `logo.png` na pasta `images/`, o logo em HD estará visível no site! 🎉
