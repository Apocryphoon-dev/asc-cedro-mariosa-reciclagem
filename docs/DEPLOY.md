# 🚀 Guia de Deploy - EcoResíduos

## Opção 1: Netlify Drop (MAIS RÁPIDO - 2 minutos)

### Sem instalação, sem cadastro inicial

1. **Acesse**: https://app.netlify.com/drop
2. **Arraste** toda a pasta `site-gordo` para a área indicada
3. **Pronto!** Site publicado com URL tipo: `https://ecoresiduos-123.netlify.app`

**Vantagens:**
- ✅ Zero configuração
- ✅ HTTPS automático
- ✅ Deploy instantâneo
- ✅ Atualizações fáceis (só arrastar novamente)

---

## Opção 2: GitHub Pages (Recomendado)

### Passo a passo completo

#### 1. Criar repositório no GitHub

```powershell
# Inicializar git na pasta do projeto
cd "c:\Users\Aprocryphoon\Desktop\site-gordo"
git init
git add .
git commit -m "Initial commit - Site EcoResíduos"
```

#### 2. No GitHub (https://github.com)

1. Clique em **New Repository**
2. Nome: `site-ecoresiduos` (ou qualquer nome)
3. **Público** ou Privado (ambos funcionam)
4. **Não** marque "Initialize with README"
5. Clique em **Create repository**

#### 3. Conectar e enviar

```powershell
# Substituir SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/site-ecoresiduos.git
git branch -M main
git push -u origin main
```

#### 4. Ativar GitHub Pages

1. No repositório, vá em **Settings** > **Pages**
2. Em **Source**, selecione: `main` branch e `/root`
3. Clique em **Save**
4. Aguarde 1-2 minutos

**URL do site:** `https://SEU_USUARIO.github.io/site-ecoresiduos/`

---

## Opção 3: Vercel (Alternativa profissional)

### Via linha de comando

```powershell
# Instalar Vercel CLI
npm install -g vercel

# Fazer deploy
cd "c:\Users\Aprocryphoon\Desktop\site-gordo"
vercel

# Seguir as instruções no terminal
```

---

## Opção 4: Surge.sh (Mais simples via terminal)

```powershell
# Instalar Surge
npm install -g surge

# Fazer deploy
cd "c:\Users\Aprocryphoon\Desktop\site-gordo"
surge

# Escolher um domínio tipo: ecoresiduos.surge.sh
```

---

## 🔄 Para Atualizar o Site

### Netlify Drop
- Arraste a pasta novamente

### GitHub Pages
```powershell
git add .
git commit -m "Atualização do site"
git push
```

### Vercel
```powershell
vercel --prod
```

### Surge
```powershell
surge
```

---

## 🌐 Domínio Próprio (Opcional)

Depois que escolher uma plataforma, você pode configurar domínio próprio:
- `www.ecoresiduos.com.br`

Todas as plataformas acima suportam domínios personalizados gratuitamente!

---

## 📊 Comparação Rápida

| Plataforma | Velocidade | Facilidade | Profissional | Gratuito |
|------------|------------|------------|--------------|----------|
| Netlify Drop | ⚡⚡⚡ | ⭐⭐⭐ | ⭐⭐ | ✅ |
| GitHub Pages | ⚡⚡ | ⭐⭐ | ⭐⭐⭐ | ✅ |
| Vercel | ⚡⚡⚡ | ⭐⭐ | ⭐⭐⭐ | ✅ |
| Surge | ⚡⚡⚡ | ⭐⭐⭐ | ⭐ | ✅ |

---

## 💡 Recomendação

**Para mostrar ao cliente AGORA**: Use **Netlify Drop**
**Para projeto profissional**: Use **GitHub Pages** ou **Vercel**
