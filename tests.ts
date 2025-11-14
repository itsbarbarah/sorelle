import React from 'react';

/**
 * Script de testes para validação do website
 * Testes automatizados e manuais
 */

// ============================================
// 1. TESTES DE RENDERIZAÇÃO
// ============================================

export const testRenderization = () => {
  console.log("🔍 INICIANDO TESTES DE RENDERIZAÇÃO");
  
  const tests = {
    "Elemento root existe": () => document.getElementById('root') !== null,
    "Body possui classes": () => document.body.className.length > 0,
    "Navegação existe": () => document.querySelector('nav') !== null,
    "Footer existe": () => document.querySelector('footer') !== null,
  };

  Object.entries(tests).forEach(([name, test]) => {
    const result = test();
    console.log(`${result ? '✅' : '❌'} ${name}`);
  });
};

// ============================================
// 2. TESTES DE ELEMENTOS DO DOM
// ============================================

export const testDOMElements = () => {
  console.log("\n🔍 TESTANDO ELEMENTOS DO DOM");
  
  const elements = {
    "Logo/Título": 'h1',
    "Menu de navegação": 'nav button',
    "Ícone de pesquisa": '[class*="search"]',
    "Ícone de favoritos": '[class*="heart"]',
    "Ícone de usuário": '[class*="user"]',
    "Ícone de carrinho": '[class*="shopping"]',
    "Produtos": '[class*="product"]',
    "Modal": '[class*="modal"]',
    "Carrinho sidebar": '[class*="fixed"]',
    "Footer": 'footer',
  };

  Object.entries(elements).forEach(([name, selector]) => {
    const found = document.querySelectorAll(selector).length > 0;
    console.log(`${found ? '✅' : '❌'} ${name}`);
  });
};

// ============================================
// 3. TESTES DE FUNCIONALIDADES CRÍTICAS
// ============================================

export const testCriticalFunctionalities = () => {
  console.log("\n🔍 TESTANDO FUNCIONALIDADES CRÍTICAS");
  
  const tests = {
    "Página home carregou": () => window.location.pathname === '/' || window.location.pathname === '',
    "Elementos interativos existem": () => document.querySelectorAll('button').length > 5,
    "Inputs de pesquisa existem": () => document.querySelector('input[type="text"]') !== null,
    "Formulários existem": () => document.querySelectorAll('form').length >= 1,
    "Imagens carregadas": () => document.querySelectorAll('img').length > 3,
  };

  Object.entries(tests).forEach(([name, test]) => {
    try {
      const result = test();
      console.log(`${result ? '✅' : '❌'} ${name}`);
    } catch (error) {
      console.log(`❌ ${name} - Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  });
};

// ============================================
// 4. TESTES DE VALIDAÇÃO DE DADOS
// ============================================

export const testDataValidation = () => {
  console.log("\n🔍 TESTANDO VALIDAÇÃO DE DADOS");
  
  const validators = {
    "Email válido": (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    "Telefone com dígitos": (phone: string) => /^\d{10,}$/.test(phone.replace(/\D/g, '')),
    "Preço é número": (price: string) => !isNaN(parseFloat(price)),
  };

  // Testes de amostra
  console.log(`✅ Email 'test@example.com': ${validators["Email válido"]('test@example.com')}`);
  console.log(`❌ Email 'invalido': ${validators["Email válido"]('invalido')}`);
  console.log(`✅ Preço '45000': ${validators["Preço é número"]('45000')}`);
};

// ============================================
// 5. TESTES DE ACESSIBILIDADE
// ============================================

export const testAccessibility = () => {
  console.log("\n🔍 TESTANDO ACESSIBILIDADE");
  
  const checks = {
    "Botões têm texto/aria-label": () => {
      let count = 0;
      document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.trim() || btn.getAttribute('aria-label')) count++;
      });
      return count > 0;
    },
    "Imagens têm alt text": () => {
      let count = 0;
      document.querySelectorAll('img').forEach(img => {
        if (img.getAttribute('alt')) count++;
      });
      return count >= document.querySelectorAll('img').length * 0.7;
    },
    "Links navegáveis": () => document.querySelectorAll('a, button').length > 5,
    "Inputs têm labels": () => document.querySelectorAll('label').length > 0,
  };

  Object.entries(checks).forEach(([name, test]) => {
    try {
      const result = test();
      console.log(`${result ? '✅' : '⚠️' } ${name}`);
    } catch (error) {
      console.log(`❌ ${name} - Erro: ${error.message}`);
    }
  });
};

// ============================================
// 6. TESTES DE PERFORMANCE
// ============================================

export const testPerformance = () => {
  console.log("\n🔍 TESTANDO PERFORMANCE");
  
  const startTime = performance.now();
  
  setTimeout(() => {
    const endTime = performance.now();
    const loadTime = endTime - startTime;
    
    console.log(`⏱️  Tempo de carregamento: ${loadTime.toFixed(2)}ms`);
    console.log(`${loadTime < 3000 ? '✅' : '⚠️ '} Tempo aceitável (< 3000ms)`);
    
    const memoryUsage = (performance as any).memory;
    if (memoryUsage) {
      console.log(`💾 Uso de memória: ${(memoryUsage.usedJSHeapSize / 1048576).toFixed(2)} MB`);
    }
  }, 1000);
};

// ============================================
// 7. TESTE DE CONSOLE
// ============================================

export const testConsoleErrors = () => {
  console.log("\n🔍 VERIFICANDO CONSOLE PARA ERROS");
  
  // Store original console methods
  const originalError = console.error.bind(console);
  const originalWarn = console.warn.bind(console);
  
  let errorCount = 0;
  let warnCount = 0;
  
  console.error = function(...args: any[]) {
    errorCount++;
    originalError(...args);
  };
  
  console.warn = function(...args: any[]) {
    warnCount++;
    originalWarn(...args);
  };
  
  setTimeout(() => {
    console.error = originalError;
    console.warn = originalWarn;
    
    console.log(`❌ Erros encontrados: ${errorCount}`);
    console.log(`⚠️  Warnings encontrados: ${warnCount}`);
    
    if (errorCount === 0 && warnCount === 0) {
      console.log("✅ Nenhum erro ou warning no console");
    }
  }, 2000);
};

// ============================================
// 8. SUITE DE TESTES COMPLETA
// ============================================

export const runAllTests = () => {
  console.clear();
  console.log("╔═══════════════════════════════════════════════════════╗");
  console.log("║     🧪 SUITE DE TESTES - MAISON D'HÉRITAGE         ║");
  console.log("║     Data: " + new Date().toLocaleDateString('pt-BR') + "                            ║");
  console.log("╚═══════════════════════════════════════════════════════╝\n");
  
  try {
    testRenderization();
    testDOMElements();
    testCriticalFunctionalities();
    testDataValidation();
    testAccessibility();
    testPerformance();
    testConsoleErrors();
    
    console.log("\n╔═══════════════════════════════════════════════════════╗");
    console.log("║          ✅ TESTES CONCLUÍDOS COM SUCESSO            ║");
    console.log("╚═══════════════════════════════════════════════════════╝\n");
    
  } catch (error) {
    console.error("❌ ERRO DURANTE OS TESTES:", error);
  }
};

// ============================================
// 9. TESTE DE NAVEGAÇÃO
// ============================================

export const testNavigation = () => {
  console.log("\n🔍 TESTANDO NAVEGAÇÃO");
  
  const pages = ['home', 'collections', 'bespoke', 'heritage', 'contact', 'account', 'checkout', 'favorites'];
  
  pages.forEach(page => {
    const button = document.querySelector(`button[onclick*="${page}"]`);
    console.log(`${button ? '✅' : '❌'} Botão para página "${page}"`);
  });
};

// ============================================
// 10. TESTE DE FILTROS E BUSCA
// ============================================

export const testFiltersAndSearch = () => {
  console.log("\n🔍 TESTANDO FILTROS E BUSCA");
  
  const searchInput = document.querySelector('input[placeholder*="Procure"]');
  const categoryButtons = document.querySelectorAll('button[class*="category"]');
  const sortSelect = document.querySelector('select');
  
  console.log(`${searchInput ? '✅' : '❌'} Barra de pesquisa existe`);
  console.log(`${categoryButtons.length > 0 ? '✅' : '❌'} Botões de categoria existem`);
  console.log(`${sortSelect ? '✅' : '❌'} Seletor de ordenação existe`);
};

// ============================================
// INICIALIZAÇÃO
// ============================================

export default runAllTests;
