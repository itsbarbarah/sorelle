# 📋 Plano de Testes - Maison d'Héritage

Data: 14 de Novembro de 2025
Versão: 1.0

---

## 1. TESTES DE NAVEGAÇÃO

### 1.1 Barra de Navegação Principal
- [ ] Logo "Sorelle" clicável retorna para home
- [ ] Menu "Coleções" navega corretamente
- [ ] Menu "Personalizado" navega para página bespoke
- [ ] Menu "Herança" navega para página heritage
- [ ] Menu "Contato" navega para página contact
- [ ] Menu Mobile funciona em resoluções pequenas
- [ ] Todos os botões do menu mobile funcionam

### 1.2 Ícones de Navegação
- [ ] Ícone Search abre/fecha barra de pesquisa
- [ ] Ícone Heart (favoritos) funciona e mostra contador
- [ ] Ícone User navega para Account
- [ ] Ícone Shopping Bag abre/fecha carrinho lateral
- [ ] Todos os contadores funcionam corretamente

### 1.3 Navegação por Footer
- [ ] Links de "Coleções" no footer funcionam
- [ ] Links de "Serviços" funcionam
- [ ] Links de "Sobre" funcionam
- [ ] Social media links abrem corretamente

---

## 2. TESTES DE PESQUISA E FILTRAGEM

### 2.1 Barra de Pesquisa
- [ ] Search ativa/desativa com clique no ícone
- [ ] Digitação em tempo real filtra produtos
- [ ] Case-insensitive (maiúscula/minúscula)
- [ ] Pesquisa por nome do produto funciona
- [ ] Pesquisa por descrição funciona
- [ ] Limpa resultados ao apagar texto
- [ ] Mostra "nenhum produto encontrado" quando apropriado
- [ ] Search funciona em mobile

### 2.2 Filtros de Categoria
- [ ] "Todos" mostra todos os produtos
- [ ] "Colares" filtra apenas colares
- [ ] "Anéis" filtra apenas anéis
- [ ] "Brincos" filtra apenas brincos
- [ ] "Pulseiras" filtra apenas pulseiras
- [ ] Categoria selecionada fica destacada

### 2.3 Filtros de Preço
- [ ] "Todos os Preços" mostra todos
- [ ] "Menos de $25.000" filtra corretamente
- [ ] "$25.000 - $40.000" filtra corretamente
- [ ] "Mais de $40.000" filtra corretamente

### 2.4 Ordenação
- [ ] "Destaque" ordena por padrão
- [ ] "Preço: Menor para Maior" funciona
- [ ] "Preço: Maior para Menor" funciona
- [ ] "Nome: A-Z" ordena alfabeticamente

### 2.5 Filtros Combinados
- [ ] Categoria + Preço funcionam juntos
- [ ] Pesquisa + Categoria funcionam juntos
- [ ] Pesquisa + Preço funcionam juntos
- [ ] Todos os filtros funcionam simultaneamente

---

## 3. TESTES DO CARRINHO

### 3.1 Adicionar ao Carrinho
- [ ] Botão "Adicionar ao Carrinho" em Collection
- [ ] Botão "ADD TO COLLECTION" no modal de produto
- [ ] Notificação "Adicionado à coleção" aparece
- [ ] Contador no ícone atualiza
- [ ] Carrinho lateral atualiza

### 3.2 Visualização do Carrinho
- [ ] Carrinho lateral abre/fecha
- [ ] Lista todos os produtos adicionados
- [ ] Mostra imagem, nome e preço de cada item
- [ ] Mostra total correto
- [ ] Carrinho vazio mostra mensagem apropriada

### 3.3 Remover do Carrinho
- [ ] Botão "Remover" funciona
- [ ] Notificação "Removido da coleção" aparece
- [ ] Produto sai da lista
- [ ] Total atualiza corretamente
- [ ] Contador reduz

### 3.4 Botões do Carrinho
- [ ] "Prosseguir para Checkout" leva ao checkout
- [ ] "Continuar Comprando" fecha o carrinho

---

## 4. TESTES DE FAVORITOS

### 4.1 Adicionar Favoritos
- [ ] Ícone Heart nos produtos fica vermelho
- [ ] Notificação "Adicionado aos favoritos" aparece
- [ ] Contador de favoritos aumenta
- [ ] Produto aparece na página de Favoritos

### 4.2 Remover Favoritos
- [ ] Clique novamente remove do favorito
- [ ] Notificação "Removido dos favoritos" aparece
- [ ] Contador diminui
- [ ] Ícone volta ao estado normal

### 4.3 Página de Favoritos
- [ ] Mostra todos os produtos favoritados
- [ ] "EXPLORAR COLEÇÕES" aparece quando vazio
- [ ] Pode adicionar ao carrinho diretamente
- [ ] Botão de remover funciona

---

## 5. TESTES DE PRODUTOS

### 5.1 Modal de Produto
- [ ] Clique no produto abre modal
- [ ] Imagem do produto exibe corretamente
- [ ] Nome, preço, descrição aparecem
- [ ] Avaliações e reviews mostram
- [ ] Detalhes técnicos aparecem
- [ ] História/story do produto aparece
- [ ] Badge (Herança, Novo, etc) mostra

### 5.2 Ações no Modal
- [ ] Botão "ADICIONAR À COLEÇÃO" funciona
- [ ] Botão "AGENDAR VISUALIZAÇÃO PRIVADA" funciona
- [ ] Heart favorita o produto
- [ ] Botão X fecha o modal
- [ ] Clique fora do modal fecha

### 5.3 Informações Adicionais
- [ ] "Garantia Vitalícia" exibe corretamente
- [ ] "Autenticidade Certificada" exibe
- [ ] "Embalagem de Presente Cortesia" exibe
- [ ] "Limpeza e Manutenção Gratuita" exibe

---

## 6. TESTES DAS PÁGINAS ESPECIAIS

### 6.1 Home Page
- [ ] Hero Slides mudam a cada 5 segundos
- [ ] Indicadores de slide funcionam
- [ ] "Explorar Coleção" navega para collections
- [ ] Seção "Peças Assinatura" mostra 3 produtos
- [ ] Seção "Sete Gerações de Excelência" carrega
- [ ] Seção "Depoimentos" mostra 3 testimonials
- [ ] Instagram posts grid exibe 6 imagens
- [ ] "Junte-se à Nossa Clientela" funciona

### 6.2 Collections Page
- [ ] Categorias filtram corretamente
- [ ] Grid de produtos exibe bem
- [ ] Hover effects funcionam
- [ ] Produto clicável abre modal

### 6.3 Bespoke Page
- [ ] Hero image carrega
- [ ] 5 etapas do processo exibem
- [ ] "AGENDAR CONSULTA" funciona

### 6.4 Heritage Page
- [ ] Hero image carrega
- [ ] Timeline exibe 6 períodos
- [ ] Informações de sustentabilidade aparecem
- [ ] 3 cards de sustentabilidade mostram

### 6.5 Contact Page
- [ ] Informações de contato aparecem
- [ ] Locais alternativos listam
- [ ] Formulário de contato completo
- [ ] FAQ com 4 perguntas
- [ ] Todos os campos do formulário validam

---

## 7. TESTES DO ACCOUNT

### 7.1 Página de Account
- [ ] Ícone User leva a Account
- [ ] Formulário de Informações Pessoais aparecem
- [ ] Formulário de Endereço aparece
- [ ] Formulário de Segurança aparece
- [ ] Botão "SALVAR ALTERAÇÕES" funciona
- [ ] Botão "SALVAR ENDEREÇO" funciona
- [ ] Botão "ALTERAR SENHA" funciona

### 7.2 Histórico de Pedidos
- [ ] "Meus Pedidos" seção aparece
- [ ] Mostra pedidos do carrinho
- [ ] Exibe ID, nome, status e preço
- [ ] "Ver Detalhes" funciona

---

## 8. TESTES DO CHECKOUT

### 8.1 Página de Checkout Vazia
- [ ] Mensagem "Seu carrinho está vazio" aparece
- [ ] Botão "CONTINUAR COMPRANDO" funciona
- [ ] Retorna para collections

### 8.2 Checkout com Produtos
- [ ] Formulário de contato aparece
- [ ] Campos: Nome, Email
- [ ] Formulário de endereço aparece
- [ ] Campos: Endereço, Cidade, País
- [ ] Métodos de pagamento aparecem
- [ ] Cartão de crédito, PayPal, Transferência

### 8.3 Resumo do Pedido
- [ ] Lista todos os produtos
- [ ] Mostra quantidade (1) para cada
- [ ] Calcula subtotal corretamente
- [ ] Frete mostra "Grátis"
- [ ] Impostos calculam 10%
- [ ] Total final correto
- [ ] "COMPLETAR COMPRA" funciona
- [ ] "EDITAR CARRINHO" funciona

---

## 9. TESTES DE RESPONSIVIDADE

### 9.1 Desktop (1920x1080)
- [ ] Layout correto
- [ ] Todos os elementos visíveis
- [ ] Sem scroll horizontal

### 9.2 Tablet (768x1024)
- [ ] Menu desktop funciona
- [ ] Grids ajustam para 2 colunas
- [ ] Carrinho funciona

### 9.3 Mobile (375x667)
- [ ] Menu mobile aparece
- [ ] Hambúrguer funciona
- [ ] Grids ajustam para 1 coluna
- [ ] Texto legível
- [ ] Botões tocáveis

---

## 10. TESTES DE PERFORMANCE

### 10.1 Carregamento
- [ ] Página home carrega em < 3s
- [ ] Imagens carregam corretamente
- [ ] Não há erros no console
- [ ] Sem memory leaks

### 10.2 Interatividade
- [ ] Cliques respondem imediatamente
- [ ] Animações são suaves
- [ ] Scroll funciona bem

---

## 11. TESTES DE VALIDAÇÃO

### 11.1 Inputs
- [ ] Email valida formato correto
- [ ] Números aceitam apenas dígitos
- [ ] Campos obrigatórios marcam *

---

## 12. TESTES DE ACESSIBILIDADE

### 12.1 Teclado
- [ ] Pode navegar com Tab
- [ ] Enter ativa botões
- [ ] Escape fecha modais

### 12.2 Visual
- [ ] Contraste suficiente
- [ ] Textos legíveis
- [ ] Sem piscar/flashing

---

## 13. CASOS DE ERRO

### 13.1 Operações Vazias
- [ ] Clicar em remover de carrinho vazio
- [ ] Visualizar favorites vazio
- [ ] Finalizar compra sem itens

### 13.2 Edge Cases
- [ ] Muito texto em campo
- [ ] Caracteres especiais em pesquisa
- [ ] Múltiplos cliques rápidos

---

## Resultado Final

**Total de Testes**: 150+
**Data de Execução**: _______________
**Testador**: _______________
**Status**: ⚪ Não Iniciado | 🟡 Em Progresso | 🟢 Concluído

**Problemas Encontrados**:
1. _______________
2. _______________
3. _______________

**Observações**:
_______________________________________________________________________________

---
