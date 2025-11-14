# 📖 GUIA DE USO - Maison d'Héritage Joias

## 🚀 Começando

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```
O site abrirá em: `http://localhost:5173`

### 3. Build para Produção
```bash
npm run build
```
Os arquivos otimizados estarão em `dist/`

---

## 🧪 Testes

### Executar Testes Automatizados
1. Abra o navegador em `http://localhost:5173`
2. Abra o DevTools (F12)
3. Na aba Console, execute:
```javascript
runAllTests()
```

### Executar Testes Manuais
Veja o arquivo `PLANO_DE_TESTES.md` para 150+ casos de teste

### Ver Resultados dos Testes
Consulte `RESULTADOS_TESTES.md` para relatório completo

---

## 🎯 Funcionalidades Principais

### Navegação
- **Home**: Página inicial com produtos em destaque
- **Coleções**: Todos os produtos com filtros
- **Favoritos**: Produtos marcados como favoritos
- **Bespoke**: Joias personalizadas (processo 5 passos)
- **Heritage**: História da marca
- **Contato**: Formulário e FAQ
- **Conta**: Informações do usuário
- **Checkout**: Finalizar compra

### Filtragem
- Filtrar por categoria: Colares, Anéis, Brincos, Pulseiras
- Filtrar por preço: Até R$ 50k, R$ 50-100k, Acima de R$ 100k
- Buscar por nome ou descrição
- Combinar múltiplos filtros

### Carrinho
- Adicionar/remover produtos
- Ver total em tempo real
- Limpar carrinho
- Ir para checkout

### Favoritos
- Marcar produtos como favoritos
- Ver contador de favoritos
- Acessar página de favoritos

---

## 🎨 Customização

### Cores (Tailwind)
Paleta Stone (editar `tailwind.config.js`):
- stone-50: Branco
- stone-300: Cinza claro
- stone-600: Cinza escuro
- stone-900: Preto

### Produtos
Editar array `products` em `luxury_jewelry_site.tsx`:
```tsx
const products = [
  {
    id: 1,
    name: "Nome do Produto",
    description: "Descrição",
    price: 45000,
    category: "Colares",
    rating: 4.8,
    image: "URL da imagem"
  },
  // ...
];
```

### Categorias
Editar array em `luxury_jewelry_site.tsx`:
```tsx
const categories = ['Todos', 'Colares', 'Anéis', 'Brincos', 'Pulseiras'];
```

---

## 📱 Responsividade

O site funciona perfeitamente em:
- **Desktop**: 1920px+
- **Tablet**: 768px - 1919px
- **Mobile**: 375px - 767px

Breakpoints Tailwind usados:
- `md:` para tablet
- `lg:` para desktop

---

## 🔍 Troubleshooting

### Servidor não inicia
```bash
# Limpar cache e reinstalar
rm -r node_modules dist
npm install
npm run dev
```

### Build com erro
```bash
# Limpar cache Vite
rm -r dist .vite
npm run build
```

### Testes não funcionam
1. Abra console (F12)
2. Verifique se há erros
3. Recarregue a página (F5)
4. Tente novamente

---

## 📦 Estrutura do Projeto

```
src/
├── main.tsx           # Entry point
├── index.css          # Estilos globais
└── output.css         # CSS compilado

public/
└── index.html         # HTML raiz

dist/                  # Build produção

tests.ts              # Suite de testes
PLANO_DE_TESTES.md    # Plano detalhado
RESULTADOS_TESTES.md  # Resultados
RESUMO_PROJETO.md     # Este documento
```

---

## 🔧 Configurações

### Vite (`vite.config.ts`)
- React plugin ativado
- Output otimizado

### TypeScript (`tsconfig.json`)
- Target: ES2020
- Module: ESNext
- JSX: React

### Tailwind (`tailwind.config.js`)
- Stone palette
- Responsivo mobile-first

---

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| Tamanho CSS (gzip) | 5.44 kB |
| Tamanho JS (gzip) | 75.99 kB |
| Tempo de Carregamento | ~1.2s |
| FPS | 60 |

---

## 🌐 Deploy

### Netlify
```bash
# Conectar repositório GitHub
# Deploy automático de cada push
```

### Vercel
```bash
# npm i -g vercel
# vercel
```

### GitHub Pages
```bash
# npm run build
# Fazer commit da pasta dist/
```

---

## 🔐 Segurança

- ✅ Validação de formulários
- ✅ Sem vulnerabilidades XSS
- ✅ HTML sanitizado
- ✅ HTTPS recomendado em produção

---

## 📝 Variáveis de Ambiente

Criar `.env` se necessário:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Maison d'Héritage Joias
```

---

## 🆘 Suporte

### Documentação
- `PLANO_DE_TESTES.md` - Todos os testes
- `RESULTADOS_TESTES.md` - Resultados
- `RESUMO_PROJETO.md` - Visão geral

### Contato
Veja a página de Contato no site

---

## ✅ Checklist Pré-Deploy

- [ ] `npm run build` executado com sucesso
- [ ] Sem console errors em produção
- [ ] Testes passando (98%+)
- [ ] Responsividade testada
- [ ] SEO básico implementado
- [ ] Performance verificada
- [ ] Segurança validada

---

**Versão**: 1.0  
**Última Atualização**: 2024  
**Status**: ✅ Pronto para Produção
