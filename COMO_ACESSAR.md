# 🚀 COMO ACESSAR O PROJETO

## 📍 Localização do Projeto

```
C:\Users\admde\maison-heritage-jewelry\
```

## 🎯 Como Executar o Website Localmente

### 1️⃣ Abrir Terminal
```powershell
# Navegue até a pasta do projeto
cd C:\Users\admde\maison-heritage-jewelry
```

### 2️⃣ Instalar Dependências (se necessário)
```powershell
npm install
```

### 3️⃣ Executar em Desenvolvimento
```powershell
npm run dev
```

Você verá algo assim:
```
  VITE v7.2.2  ready in 698 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 4️⃣ Abrir no Navegador
```
http://localhost:5173
```

---

## 🧪 Como Executar os Testes

### Testes Automatizados
1. Abra o site em `http://localhost:5173`
2. Abra o DevTools (pressione `F12`)
3. Vá para a aba **Console**
4. Digite:
```javascript
runAllTests()
```
5. Pressione Enter

### Testes Manuais
1. Consulte o arquivo: `PLANO_DE_TESTES.md`
2. Siga os 150+ casos de teste documentados
3. Anote qualquer problema encontrado

---

## 📖 Documentação

### Para Entender o Projeto
1. **Comece aqui**: `README.md` (visão geral)
2. **Depois leia**: `VISUAL_SUMMARY.md` (resumo com gráficos)
3. **Para deploy**: `GUIA_USO.md`

### Para Testes
1. **Plano**: `PLANO_DE_TESTES.md`
2. **Resultados**: `RESULTADOS_TESTES.md`

### Para Produção
1. **Executivo**: `RELATORIO_EXECUTIVO.md`
2. **Checklist**: `CHECKLIST_FINAL.md`
3. **Resumo**: `RESUMO_PROJETO.md`

---

## 🏗️ Build para Produção

```powershell
npm run build
```

Isso criará a pasta `dist/` com os arquivos otimizados prontos para deploy.

---

## 📂 Estrutura de Arquivos

```
├── 📖 README.md                 ← Comece aqui
├── 📊 VISUAL_SUMMARY.md         ← Resumo visual
├── 🧪 PLANO_DE_TESTES.md       ← Como testar
├── ✅ RESULTADOS_TESTES.md     ← Resultados
├── 💻 tests.ts                  ← Suite de testes
├── 🎯 luxury_jewelry_site.tsx   ← Código principal
├── 📱 index.html                ← HTML raiz
├── 🎨 src/                      ← Arquivos fonte
├── 🏗️ dist/                     ← Build produção
└── 📦 package.json              ← Dependências
```

---

## 🌐 Acessar no GitHub

**URL do Repositório:**
```
https://github.com/itsbarbarah/sorelle.git
```

**Branch:** `master`

---

## 📱 Testar Responsividade

### No Chrome DevTools
1. Abra F12
2. Clique no ícone de dispositivo (mobile)
3. Teste em diferentes tamanhos:
   - 📱 Mobile (375px)
   - 📱 Tablet (768px)
   - 💻 Desktop (1920px+)

---

## 🎯 Funcionalidades para Testar

### ✅ Navegação
- [ ] Home funciona
- [ ] Coleções carrega produtos
- [ ] Bespoke mostra 5 passos
- [ ] Heritage mostra timeline
- [ ] Contato exibe formulário
- [ ] Account abre ao clicar no ícone do usuário
- [ ] Checkout integrado

### ✅ Busca & Filtros
- [ ] Pesquisa funciona (teste "Colar")
- [ ] Filtro por categoria funciona
- [ ] Filtro por preço funciona
- [ ] Filtros combinados funcionam

### ✅ Carrinho
- [ ] Adicionar produto ao carrinho
- [ ] Contador de carrinho aumenta
- [ ] Remover do carrinho
- [ ] Ver checkout

### ✅ Favoritos
- [ ] Marcar como favorito
- [ ] Contador de favoritos aumenta
- [ ] Acessar página de favoritos

---

## 💡 Dicas Úteis

### Limpar Cache
```powershell
npm cache clean --force
```

### Reinstalar Dependências
```powershell
rm -r node_modules
npm install
```

### Recarregar Servidor
```
Pressione: Ctrl + C no terminal
Depois: npm run dev
```

### Ver Logs do Build
```powershell
npm run build -- --debug
```

---

## 📊 Ver Arquivos do Projeto

```powershell
# Lista todos os arquivos
dir

# Ver tamanho dos arquivos
dir | sort -Property Length -Descending

# Contar linhas de código
(Get-Content luxury_jewelry_site.tsx | Measure-Object -Line).Lines
```

---

## 🔧 Problemas Comuns

### ❌ Porta 5173 em uso
```powershell
# Especificar outra porta
npm run dev -- --port 3000
```

### ❌ Erro de módulos
```powershell
# Reinstalar
npm install
```

### ❌ Erro de TypeScript
```powershell
# O build deve compilar sem erros
npm run build

# Se houver erro, verifique:
# - Sintaxe do TypeScript
# - Imports corretos
# - Type annotations
```

---

## 🎨 Customizações Rápidas

### Mudar Cores
Editar `tailwind.config.js` - seção `colors`

### Adicionar Produto
Editar `luxury_jewelry_site.tsx` - array `products`

### Mudar Categorias
Editar `luxury_jewelry_site.tsx` - array `categories`

---

## ✅ Checklist Antes de Deploy

- [ ] Executou `npm run build` com sucesso?
- [ ] Não há erros no console?
- [ ] Testou em mobile?
- [ ] Testou em Chrome, Firefox, Safari?
- [ ] Executou `runAllTests()`?
- [ ] Leu a documentação?
- [ ] Fez git push?

---

## 🚀 Deploy Recomendado

### Opção 1: Netlify (Mais Fácil)
1. Conecte seu GitHub a netlify.com
2. Selecione este repositório
3. Clique Deploy
4. Pronto! 🎉

### Opção 2: Vercel
1. Vá a vercel.com
2. Conecte GitHub
3. Selecione repositório
4. Deploy automático ✅

### Opção 3: GitHub Pages
```powershell
npm run build
git add dist/
git commit -m "Deploy produção"
git push
```

---

## 📞 Suporte

**Dúvidas?** Consulte:
- `GUIA_USO.md` - Tutorial completo
- `README.md` - Visão geral
- `RESULTADOS_TESTES.md` - Testes executados

---

## 🎉 Você Está Pronto!

O projeto está 100% funcional e pronto para explorar. Boa sorte! 🚀

```
╔════════════════════════════════════════════════╗
║  MAISON D'HÉRITAGE JOIAS                       ║
║  ✅ Pronto para Exploração                    ║
║  ✅ Pronto para Testes                        ║
║  ✅ Pronto para Produção                      ║
╚════════════════════════════════════════════════╝
```

---

**Versão**: 1.0  
**Status**: ✅ Completo  
**Data**: 2024  
**Desenvolvido com ❤️ React + TypeScript**
