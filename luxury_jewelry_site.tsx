import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Award, Shield, Clock, Phone, Mail, MapPin, X, Menu, ChevronRight, Star, Heart, CheckCircle, Sparkles, Eye, Package } from 'lucide-react';

const LuxuryJewelry = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState('home');
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['Todos', 'Colares', 'Anéis', 'Brincos', 'Pulseiras'];

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80',
      title: 'Elegância Atemporal',
      subtitle: 'Artesanato refinado transmitido por sete gerações',
      cta: 'Explorar Coleção'
    },
    {
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80',
      title: 'Coleção Herança',
      subtitle: 'Inspirado em joias reais europeias do século XIX',
      cta: 'Descobrir Herança'
    },
    {
      image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=1600&q=80',
      title: 'Criações Personalizadas',
      subtitle: 'Transforme sua visão em uma obra-prima extraordinária',
      cta: 'Comece sua Jornada'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Colar de Diamantes Herança',
      price: 45000,
      category: 'Colares',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      description: 'Rivière de diamantes inspirado em vintage',
      details: 'Ouro branco 18K, peso total de 15 quilates, diamantes certificados',
      story: 'Inspirado por uma coleção real europeia do século XIX, este trabalho apresenta diamantes selecionados manualmente dispostos no estilo rivière clássico.',
      badge: 'Herança',
      rating: 5,
      reviews: 12
    },
    {
      id: 2,
      name: 'Anel de Noivado Solitário',
      price: 28000,
      category: 'Anéis',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      description: 'Diamante de corte almofada com 3,5 quilates',
      details: 'Anel de platina, cor D, claridade VVS1',
      story: 'Um símbolo atemporal do compromisso eterno, confeccionado com a mais fina platina e apresentando um diamante de qualidade de museu.',
      badge: 'Mais Vendido',
      rating: 5,
      reviews: 28
    },
    {
      id: 3,
      name: 'Brincos de Pérola Cênica',
      price: 12000,
      category: 'Brincos',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      description: 'Pérolas do Mar do Sul com diamantes',
      details: 'Ouro amarelo 18K, pérolas de 12mm, adornos de diamantes',
      story: 'Cultivadas nas águas pristinas da Polinésia Francesa, estas raras pérolas do Mar do Sul incorporam perfeição luminosa.',
      rating: 5,
      reviews: 8
    },
    {
      id: 4,
      name: 'Pulseira Tênis',
      price: 35000,
      category: 'Pulseiras',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      description: '15 quilates de diamantes brilhantes',
      details: 'Ouro branco 18K, 60 diamantes, 7 polegadas',
      story: 'Perfeita simetria em cada pedra. Cada diamante é cuidadosamente combinado por cor, claridade e brilho.',
      badge: 'Novo',
      rating: 5,
      reviews: 15
    },
    {
      id: 5,
      name: 'Anel de Esmeralda Impactante',
      price: 52000,
      category: 'Anéis',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      description: 'Anel de esmeralda colombiana com halo',
      details: 'Platina, esmeralda de 8 quilates, halo de diamantes',
      story: 'Originária das legendárias minas Muzo da Colômbia, esta vivida esmeralda verde é circundada por um brilhante halo de diamantes.',
      badge: 'Exclusivo',
      rating: 5,
      reviews: 6
    },
    {
      id: 6,
      name: 'Brincos Lustre de Safira',
      price: 38000,
      category: 'Brincos',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      description: 'Safiras do Ceilão e diamantes',
      details: 'Ouro branco 18K, 12 quilates de safiras',
      story: 'Inspirado pelo glamour Art Deco dos anos 1920, apresentando as mais finas safiras do Ceilão conhecidas por seu tom azul-milflores.',
      rating: 5,
      reviews: 10
    }
  ];

  const testimonials = [
    {
      name: 'Elizabeth Vanderbilt',
      text: 'O artesanato é incomparável. Meu anel de noivado se tornou um tesouro familiar que será transmitido por gerações.',
      rating: 5,
      location: 'Nova York',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
    },
    {
      name: 'Catherine Montgomery',
      text: 'Trabalhar com sua equipe personalizada foi extraordinário. Cada detalhe foi perfeito, desde a consulta inicial até a apresentação final.',
      rating: 5,
      location: 'Londres',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
    },
    {
      name: 'Alexandra Sterling',
      text: 'Três gerações de minha família usam joias da Maison d\'Héritage. A qualidade e o serviço são simplesmente atemporais.',
      rating: 5,
      location: 'Paris',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80'
    }
  ];

  const instagramPosts = [
    { image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', likes: 2847 },
    { image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', likes: 3124 },
    { image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', likes: 1956 },
    { image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', likes: 2673 },
    { image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', likes: 4201 },
    { image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80', likes: 2890 }
  ];

  let filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (priceRange !== 'all') {
    if (priceRange === 'under25k') {
      filteredProducts = filteredProducts.filter(p => p.price < 25000);
    } else if (priceRange === '25k-40k') {
      filteredProducts = filteredProducts.filter(p => p.price >= 25000 && p.price <= 40000);
    } else if (priceRange === 'over40k') {
      filteredProducts = filteredProducts.filter(p => p.price > 40000);
    }
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotificationMessage('Adicionado à coleção');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    setNotificationMessage('Removido da coleção');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
      setNotificationMessage('Removido dos favoritos');
    } else {
      setFavorites([...favorites, productId]);
      setNotificationMessage('Adicionado aos favoritos');
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-stone-50">
      {showNotification && (
        <div className="fixed top-24 right-6 bg-stone-900 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <p className="text-sm">{notificationMessage}</p>
        </div>
      )}

      <nav className={`bg-white border-b border-stone-200 sticky top-0 z-50 transition-all ${scrolled ? 'shadow-lg py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <h1 
                onClick={() => {setCurrentPage('home'); window.scrollTo(0,0);}}
                className="text-2xl md:text-3xl font-serif text-stone-900 tracking-tight cursor-pointer hover:text-stone-700 transition-colors"
              >
              Sorelle
              </h1>
              <div className="hidden lg:flex space-x-8">
                <button onClick={() => {setCurrentPage('collections'); window.scrollTo(0,0);}} className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Coleções</button>
                <button onClick={() => {setCurrentPage('bespoke'); window.scrollTo(0,0);}} className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Personalizado</button>
                <button onClick={() => {setCurrentPage('heritage'); window.scrollTo(0,0);}} className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Herança</button>
                <button onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}} className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Contato</button>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Search 
                onClick={() => setShowSearch(!showSearch)}
                className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors hidden md:block" 
              />
              <div className="relative hidden md:block">
                <Heart 
                  onClick={() => {setCurrentPage('favorites'); window.scrollTo(0,0);}}
                  className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors" 
                />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </div>
              <User className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors hidden md:block" />
              <div className="relative">
                <ShoppingBag 
                  onClick={() => setShowCart(!showCart)}
                  className="w-5 h-5 text-stone-600 cursor-pointer hover:text-stone-900 transition-colors" 
                />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              <Menu onClick={() => setMobileMenu(!mobileMenu)} className="w-6 h-6 lg:hidden cursor-pointer text-stone-600" />
            </div>
          </div>
          
          {showSearch && (
            <div className="mt-4 pb-4">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Procure por joias..."
                className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:border-stone-900"
              />
            </div>
          )}
        </div>
        
        {mobileMenu && (
          <div className="lg:hidden bg-white border-t border-stone-200 py-4 px-6">
            <div className="flex flex-col space-y-4">
              <button onClick={() => {setCurrentPage('collections'); setMobileMenu(false); window.scrollTo(0,0);}} className="text-left text-stone-600">Coleções</button>
              <button onClick={() => {setCurrentPage('bespoke'); setMobileMenu(false); window.scrollTo(0,0);}} className="text-left text-stone-600">Personalizado</button>
              <button onClick={() => {setCurrentPage('heritage'); setMobileMenu(false); window.scrollTo(0,0);}} className="text-left text-stone-600">Herança</button>
              <button onClick={() => {setCurrentPage('contact'); setMobileMenu(false); window.scrollTo(0,0);}} className="text-left text-stone-600">Contato</button>
              <button onClick={() => {setCurrentPage('favorites'); setMobileMenu(false); window.scrollTo(0,0);}} className="text-left text-stone-600 flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Favoritos {favorites.length > 0 && `(${favorites.length})`}
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-stone-200 flex justify-between items-center">
          <h3 className="text-xl font-serif">Sua Coleção</h3>
          <X onClick={() => setShowCart(false)} className="w-5 h-5 cursor-pointer hover:text-stone-900" />
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100%-200px)]">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-600 mb-4">Seu carrinho está vazio</p>
              <button 
                onClick={() => {setShowCart(false); setCurrentPage('collections'); window.scrollTo(0,0);}}
                className="text-stone-900 text-sm tracking-wide hover:underline"
              >
                Explorar Coleções →
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex space-x-4 border-b border-stone-100 pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-serif text-sm mb-1">{item.name}</h4>
                    <p className="text-stone-600 text-xs mb-2">${item.price.toLocaleString()}</p>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="absolute bottom-0 w-full p-6 border-t border-stone-200 bg-white">
            <div className="flex justify-between mb-4">
              <span className="font-serif">Total</span>
              <span className="font-serif text-xl">${cartTotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-stone-900 text-white py-3 text-sm tracking-widest hover:bg-stone-800 mb-2">
              PROSSEGUIR PARA CHECKOUT
            </button>
            <button 
              onClick={() => setShowCart(false)}
              className="w-full border border-stone-300 text-stone-600 py-3 text-sm tracking-widest hover:border-stone-900"
            >
              CONTINUAR COMPRANDO
            </button>
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 md:h-full object-cover" />
                {selectedProduct.badge && (
                  <span className="absolute top-4 left-4 bg-stone-900 text-white px-4 py-1 text-xs tracking-widest">
                    {selectedProduct.badge}
                  </span>
                )}
                <button
                  onClick={(e) => {e.stopPropagation(); toggleFavorite(selectedProduct.id);}}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'}`} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-3xl font-serif mb-2">{selectedProduct.name}</h2>
                    <div className="flex items-center mb-3">
                      <div className="flex mr-2">
                        {[...Array(selectedProduct.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-stone-900 text-stone-900" />
                        ))}
                      </div>
                      <span className="text-sm text-stone-600">({selectedProduct.reviews} reviews)</span>
                    </div>
                    <p className="text-2xl text-stone-900">${selectedProduct.price.toLocaleString()}</p>
                  </div>
                  <X onClick={() => setSelectedProduct(null)} className="w-6 h-6 cursor-pointer hover:text-stone-900" />
                </div>
                
                <p className="text-stone-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                
                <div className="border-t pt-6 mb-6">
                  <h4 className="font-serif mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Detalhes
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{selectedProduct.details}</p>
                </div>
                
                <div className="border-t pt-6 mb-8">
                  <h4 className="font-serif mb-3">História</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{selectedProduct.story}</p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                      setShowCart(true);
                    }}
                    className="w-full bg-stone-900 text-white py-4 text-xs tracking-widest hover:bg-stone-800 flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADICIONAR À COLEÇÃO</span>
                  </button>
                  <button 
                    onClick={() => {setSelectedProduct(null); setCurrentPage('contact'); window.scrollTo(0,0);}}
                    className="w-full border border-stone-900 text-stone-900 py-4 text-xs tracking-widest hover:bg-stone-50 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>AGENDAR VISUALIZAÇÃO PRIVADA</span>
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t space-y-3 text-sm text-stone-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-stone-900" />
                    <span>Garantia Vitalícia</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-stone-900" />
                    <span>Autenticidade Certificada</span>
                  </div>
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-2 text-stone-900" />
                    <span>Embalagem de Presente Cortesia</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-stone-900" />
                    <span>Limpeza e Manutenção Gratuita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'home' && (
        <div>
          <div className="relative h-screen overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                  <p className="text-sm tracking-widest mb-4 font-light">FUNDADA EM 1847</p>
                  <h2 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">{slide.title}</h2>
                  <p className="text-base md:text-xl mb-8 font-light max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <button 
                    onClick={() => {setCurrentPage('collections'); window.scrollTo(0,0);}}
                    className="bg-white text-stone-900 px-10 py-4 text-sm tracking-widest hover:bg-stone-100 group"
                  >
                    {slide.cta}
                    <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentHeroSlide ? 'bg-white w-8' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-stone-100 py-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-stone-900" />
                  <span className="text-stone-600">Garantia Vitalícia</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Package className="w-5 h-5 text-stone-900" />
                  <span className="text-stone-600">Frete Grátis</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-5 h-5 text-stone-900" />
                  <span className="text-stone-600">Autenticidade Certificada</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-stone-900" />
                  <span className="text-stone-600">Devoluções em 30 Dias</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest mb-4 text-stone-600">DESTAQUE</p>
              <h3 className="text-4xl font-serif mb-4">Peças Assinatura</h3>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Descubra nossas criações mais cobiçadas, cada uma uma obra-prima de design e artesanato
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map(product => (
                <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <div className="relative overflow-hidden bg-stone-100 mb-6 aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <span className="absolute top-4 right-4 bg-white text-stone-900 px-3 py-1 text-xs tracking-widest shadow-lg">
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => {e.stopPropagation(); toggleFavorite(product.id);}}
                      className="absolute top-4 left-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'}`} />
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-stone-900 text-stone-900" />
                      ))}
                    </div>
                    <h3 className="text-xl font-serif text-stone-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-stone-600 mb-3">{product.description}</p>
                    <p className="text-lg text-stone-900">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => {setCurrentPage('collections'); window.scrollTo(0,0);}}
                className="border border-stone-900 text-stone-900 px-12 py-4 text-sm tracking-widest hover:bg-stone-900 hover:text-white transition-all"
              >
                VER TODAS AS COLEÇÕES
              </button>
            </div>
          </div>

          <div className="bg-stone-900 text-white py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-sm tracking-widest mb-6 text-stone-400">NOSSO LEGADO</p>
                  <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Sete Gerações de Excelência</h3>
                  <p className="text-stone-300 mb-6 leading-relaxed">
                    Desde 1847, a Maison d'Héritage cria joias para as famílias mais distinguidas do mundo. Cada peça é um testemunho do nosso compromisso inabalável com a perfeição artesanal.
                  </p>
                  <p className="text-stone-300 mb-8 leading-relaxed">
                    Nossos mestres joalheiros empregam técnicas transmitidas através dos séculos, garantindo que cada criação se torne uma relíquia querida.
                  </p>
                  <button 
                    onClick={() => {setCurrentPage('heritage'); window.scrollTo(0,0);}}
                    className="border border-white text-white px-10 py-4 text-xs tracking-widest hover:bg-white hover:text-stone-900 transition-all group"
                  >
                    DESCOBRA NOSSA HISTÓRIA
                    <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="relative h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1549637642-90187f64f420?w=800&q=80"
                    alt="Craftsman"
                    className="w-full h-full object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest mb-4 text-stone-600">DEPOIMENTOS</p>
              <h3 className="text-4xl font-serif mb-4">Amado por Gerações</h3>
              <p className="text-stone-600 max-w-2xl mx-auto">
                As experiências de nossa clientela distinta falam sobre nosso compromisso com a excelência
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-stone-50 p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-stone-900 text-stone-900" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 italic leading-relaxed text-center">"{testimonial.text}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-serif text-stone-900">{testimonial.name}</p>
                      <p className="text-sm text-stone-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-100 py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-sm tracking-widest mb-4 text-stone-600">SIGA-NOS</p>
                <h3 className="text-4xl font-serif mb-4">@MaisonHeritage</h3>
                <p className="text-stone-600">Compartilhe sua história com nossas joias</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {instagramPosts.map((post, index) => (
                  <div key={index} className="relative group cursor-pointer aspect-square overflow-hidden">
                    <img src={post.image} alt={`Instagram ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center space-x-2">
                        <Heart className="w-5 h-5 fill-white" />
                        <span className="font-semibold">{post.likes.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center px-6 group cursor-pointer" onClick={() => {setCurrentPage('bespoke'); window.scrollTo(0,0);}}>
                <div className="bg-stone-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-stone-900 transition-colors">
                  <Award className="w-8 h-8 text-stone-900 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif mb-4">Encomendas Personalizadas</h4>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Trabalhe diretamente com nossos mestres joalheiros para criar uma peça única que reflita seu legado pessoal
                </p>
                <button className="text-sm text-stone-900 hover:underline flex items-center justify-center mx-auto">
                  Saiba Mais <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="text-center px-6">
                <div className="bg-stone-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-stone-900" />
                </div>
                <h4 className="text-xl font-serif mb-4">Garantia Vitalícia</h4>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Cada peça é coberta por nossa garantia abrangente vitalícia e manutenção e limpeza gratuitas
                </p>
              </div>
              <div className="text-center px-6 group cursor-pointer" onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}}>
                <div className="bg-stone-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-stone-900 transition-colors">
                  <Clock className="w-8 h-8 text-stone-900 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif mb-4">Consultas Privadas</h4>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Experimente nossa coleção no conforto de sua casa com nosso serviço de visualização privada
                </p>
                <button className="text-sm text-stone-900 hover:underline flex items-center justify-center mx-auto">
                  Agende Consulta <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 py-16">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-stone-400" />
              <h3 className="text-3xl font-serif mb-6">Junte-se à Nossa Clientela Distinta</h3>
              <p className="text-stone-300 mb-8 leading-relaxed">
                Inscreva-se para receber visualizações exclusivas de novas coleções, convites para vendas privadas e recomendações de joias personalizadas
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu endereço de email"
                  className="flex-1 px-6 py-4 bg-white text-stone-900 focus:outline-none"
                />
                <button className="bg-white text-stone-900 px-8 py-4 text-sm tracking-widest hover:bg-stone-100 transition-colors">
                  INSCREVER
                </button>
              </div>
              <p className="text-stone-400 text-xs mt-4">Ao se inscrever, você concorda com nossa Política de Privacidade</p>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'collections' && (
        <div className="min-h-screen">
          <div className="relative h-96 bg-stone-900 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm tracking-widest mb-4">EXPLORAR</p>
              <h2 className="text-5xl font-serif">Nossas Coleções</h2>
              <p className="mt-4 text-stone-300">Descubra peças que transcendem o tempo</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm tracking-widest pb-2 px-4 transition-all ${
                      selectedCategory === cat 
                        ? 'text-stone-900 border-b-2 border-stone-900' 
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-4 w-full md:w-auto">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 md:flex-none px-4 py-2 border border-stone-300 text-sm focus:outline-none focus:border-stone-900"
                >
                  <option value="featured">Destaque</option>
                  <option value="price-low">Preço: Menor para Maior</option>
                  <option value="price-high">Preço: Maior para Menor</option>
                  <option value="name">Nome: A-Z</option>
                </select>
                
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="flex-1 md:flex-none px-4 py-2 border border-stone-300 text-sm focus:outline-none focus:border-stone-900"
                >
                  <option value="all">Todos os Preços</option>
                  <option value="under25k">Menos de $25.000</option>
                  <option value="25k-40k">$25.000 - $40.000</option>
                  <option value="over40k">Mais de $40.000</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-24">
                <Search className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                <p className="text-stone-600 mb-4">Nenhum produto encontrado com os critérios especificados</p>
                <button 
                  onClick={() => {setSelectedCategory('Todos'); setPriceRange('all'); setSearchQuery('');}}
                  className="text-stone-900 text-sm hover:underline"
                >
                  Limpar todos os filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    <div className="relative overflow-hidden bg-stone-100 mb-6 aspect-square">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {product.badge && (
                        <span className="absolute top-4 right-4 bg-white text-stone-900 px-3 py-1 text-xs tracking-widest shadow-lg">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {e.stopPropagation(); toggleFavorite(product.id);}}
                        className="absolute top-4 left-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'}`} />
                      </button>
                      <button
                        onClick={(e) => {e.stopPropagation(); addToCart(product); setShowCart(true);}}
                        className="absolute bottom-4 left-4 right-4 bg-stone-900 text-white py-3 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ADICIONAR AO CARRINHO
                      </button>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-stone-900 text-stone-900" />
                        ))}
                        <span className="text-xs text-stone-500 ml-2">({product.reviews})</span>
                      </div>
                      <h3 className="text-xl font-serif text-stone-900 mb-2">{product.name}</h3>
                      <p className="text-sm text-stone-600 mb-3">{product.description}</p>
                      <p className="text-lg text-stone-900">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {currentPage === 'favorites' && (
        <div className="min-h-screen">
          <div className="relative h-96 bg-stone-900 flex items-center justify-center">
            <div className="text-center text-white">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-5xl font-serif">Seus Favoritos</h2>
              <p className="mt-4 text-stone-300">Peças que capturaram seu coração</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            {favorites.length === 0 ? (
              <div className="text-center py-24">
                <Heart className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                <p className="text-stone-600 mb-4">Você ainda não adicionou nenhum favorito</p>
                <button 
                  onClick={() => {setCurrentPage('collections'); window.scrollTo(0,0);}}
                  className="border border-stone-900 text-stone-900 px-8 py-3 text-sm tracking-widest hover:bg-stone-900 hover:text-white transition-all"
                >
                  EXPLORAR COLEÇÕES
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {products.filter(p => favorites.includes(p.id)).map(product => (
                  <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    <div className="relative overflow-hidden bg-stone-100 mb-6 aspect-square">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <button
                        onClick={(e) => {e.stopPropagation(); toggleFavorite(product.id);}}
                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
                      >
                        <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                      </button>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-serif text-stone-900 mb-2">{product.name}</h3>
                      <p className="text-sm text-stone-600 mb-3">{product.description}</p>
                      <p className="text-lg text-stone-900 mb-4">
                        ${product.price.toLocaleString()}
                      </p>
                      <button
                        onClick={(e) => {e.stopPropagation(); addToCart(product); setShowCart(true);}}
                        className="border border-stone-900 text-stone-900 px-6 py-2 text-xs tracking-widest hover:bg-stone-900 hover:text-white transition-all"
                      >
                        ADICIONAR AO CARRINHO
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {currentPage === 'bespoke' && (
        <div className="min-h-screen">
          <div className="relative h-screen">
            <img 
              src="https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=1600&q=80"
              alt="Personalizado"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <Sparkles className="w-16 h-16 mb-6" />
              <h2 className="text-5xl md:text-7xl font-serif mb-6">Criações Personalizadas</h2>
              <p className="text-lg md:text-xl font-light max-w-3xl leading-relaxed">
                Transforme sua visão em uma peça extraordinária de joias que será apreciada pelas gerações
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest mb-6 text-stone-600">O PROCESSO</p>
              <h3 className="text-4xl font-serif mb-8">Criando Seu Legado</h3>
              <p className="text-stone-600 leading-relaxed">
                Nosso serviço personalizado oferece uma jornada íntima no mundo da alta joalheria
              </p>
            </div>

            <div className="space-y-16">
              {[
                { 
                  icon: <User className="w-6 h-6" />,
                  title: 'Consulta Inicial', 
                  desc: 'Encontre-se com nossa equipe de design para discutir sua visão, preferências e a história que deseja contar. Exploramos opções de pedras preciosas, escolhas de metais e inspirações de design.' 
                },
                { 
                  icon: <Sparkles className="w-6 h-6" />,
                  title: 'Desenvolvimento do Design', 
                  desc: 'Nossos artistas criam desenhos e renderizações 3D detalhadas, refinando cada detalhe até que o design capture perfeitamente sua visão. Múltiplas revisões incluídas.' 
                },
                { 
                  icon: <Award className="w-6 h-6" />,
                  title: 'Seleção de Pedras Preciosas', 
                  desc: 'Acesso à nossa coleção exclusiva das mais finas pedras preciosas do mundo. Cada pedra é selecionada manualmente e certificada, proveniente de fornecedores éticos em todo o mundo.' 
                },
                { 
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Mestria de Artesanato', 
                  desc: 'Nossos mestres joalheiros trazem seu design à vida usando técnicas consagradas transmitidas através de gerações, combinadas com tecnologia de precisão moderna.' 
                },
                { 
                  icon: <Package className="w-6 h-6" />,
                  title: 'Revelação Privada', 
                  desc: 'Experimente o momento em que sua peça é revelada em uma cerimônia privada. Cada criação personalizada vem com um certificado de autenticidade.' 
                }
              ].map((step, i) => (
                <div key={i} className="flex items-start space-x-8">
                  <div className="bg-stone-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-serif flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-4">{step.title}</h4>
                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-stone-50 p-12 rounded">
              <h4 className="text-2xl font-serif mb-4">Pronto para Começar?</h4>
              <p className="text-stone-600 mb-8">Agende uma consulta gratuita com nossa equipe de design</p>
              <button 
                onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}}
                className="bg-stone-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-stone-800 transition-all"
              >
                AGENDAR CONSULTA
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'heritage' && (
        <div className="min-h-screen">
          <div className="relative h-screen">
            <img 
              src="https://images.unsplash.com/photo-1549637642-90187f64f420?w=1600&q=80"
              alt="Herança"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <p className="text-sm tracking-widest mb-4">DESDE 1847</p>
              <h2 className="text-5xl md:text-7xl font-serif mb-6">Nossa Herança</h2>
              <p className="text-lg text-stone-200 max-w-2xl">177 anos de excelência e inovação</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 py-24">
            <h3 className="text-4xl font-serif mb-8">Um Legado de Excelência</h3>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              Em 1847, o mestre joalheiro François d'Héritage abriu seu atelier na prestigiosa Rue de la Paix em Paris. Sua visão era simples mas profunda: criar joias de beleza e artesanato tão extraordinários que cada peça se tornaria uma relíquia familiar apreciada, transmitida através de gerações.
            </p>

            <p className="text-stone-600 mb-8 leading-relaxed">
              O que começou como um pequeno atelier floresceu em uma das casas de joias mais reverenciadas do mundo, servindo realeza, aristocracia e famílias distinguidas em sete gerações.
            </p>

            <div className="my-12">
              <img 
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=80"
                alt="Atelier"
                className="w-full h-96 object-cover mb-4 shadow-lg"
              />
              <p className="text-sm text-stone-500 text-center italic">Nosso atelier original na Rue de la Paix, Paris, 1847</p>
            </div>

            <h4 className="text-2xl font-serif mb-6 mt-16">Patrocínio Real</h4>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Ao longo de nossa história, a Maison d'Héritage foi honrada em servir famílias reais e patronos distintos em todo o mundo. Das cortes da Europa aos luminares dos dias modernos, nossas peças adornaram algumas das figuras mais influentes da história, cada peça contando sua própria história notável.
            </p>

            <div className="bg-stone-50 p-8 my-12 rounded">
              <h4 className="text-2xl font-serif mb-8">Linha do Tempo de Excelência</h4>
              <div className="space-y-8">
                {[
                  { year: '1847', title: 'O Começo', desc: 'François d\'Héritage estabelece a maison em Paris' },
                  { year: '1889', title: 'Reconhecimento Internacional', desc: 'Medalha de Ouro concedida na Exposition Universelle em Paris' },
                  { year: '1923', title: 'Expansão Americana', desc: 'Abertura da boutique flagship em Madison Avenue, Nova York' },
                  { year: '1965', title: 'Nomeação Real', desc: 'Nomeada joalheira oficial da realeza europeia' },
                  { year: '2000', title: 'Novo Milênio', desc: 'Lançamento da Coleção Heritage celebrando nosso legado' },
                  { year: '2025', title: 'Continuando a Excelência', desc: 'A sétima geração continua a tradição familiar' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 border-l-2 border-stone-900 pl-6">
                    <div className="flex-shrink-0">
                      <p className="font-serif text-2xl text-stone-900 mb-1">{item.year}</p>
                      <p className="font-serif text-sm text-stone-600">{item.title}</p>
                    </div>
                    <p className="text-stone-600 pt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h4 className="text-2xl font-serif mb-6 mt-16">Luxo Sustentável</h4>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Acreditamos que o verdadeiro luxo deve ser responsável. Todas as nossas pedras preciosas são provenientes eticamente através de fornecedores certificados, e mantemos relacionamentos diretos com comunidades de mineração para garantir práticas trabalhistas justas. Nossos metais preciosos são reciclados sempre que possível, e estamos comprometidos em preservar o meio ambiente para que as futuras gerações desfrutem.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-stone-50 rounded">
                <Award className="w-12 h-12 text-stone-900 mx-auto mb-4" />
                <h5 className="font-serif mb-2">Abastecimento Ético</h5>
                <p className="text-sm text-stone-600">100% de diamantes certificados sem conflitos</p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded">
                <Shield className="w-12 h-12 text-stone-900 mx-auto mb-4" />
                <h5 className="font-serif mb-2">Comércio Justo</h5>
                <p className="text-sm text-stone-600">Parcerias diretas com comunidades artesanais</p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded">
                <Sparkles className="w-12 h-12 text-stone-900 mx-auto mb-4" />
                <h5 className="font-serif mb-2">Metais Reciclados</h5>
                <p className="text-sm text-stone-600">Comprometido com práticas sustentáveis</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="min-h-screen">
          <div className="relative h-96 bg-stone-900 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm tracking-widest mb-4">ENTRE EM CONTATO</p>
              <h2 className="text-5xl font-serif">Entre em Contato</h2>
              <p className="mt-4 text-stone-300">Estamos ansiosos para ouvir você</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-serif mb-8">Visite Nosso Atelier</h3>
                <p className="text-stone-600 mb-12 leading-relaxed">
                  Experimente nossa coleção pessoalmente agendando uma consulta privada. Nossos consultores especializados o guiarão através de nossas peças exclusivas no conforto e privacidade de nosso salão.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-stone-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-serif mb-2">Flagship Nova York</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        725 Madison Avenue<br />
                        Nova York, NY 10021<br />
                        Estados Unidos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-stone-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-serif mb-2">Telefone</h4>
                      <p className="text-stone-600 text-sm">+1 (212) 555-0147</p>
                      <p className="text-stone-500 text-xs mt-1">Segunda - Sábado: 10h - 18h EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-stone-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-serif mb-2">Email</h4>
                      <p className="text-stone-600 text-sm">concierge@maisonheritage.com</p>
                      <p className="text-stone-500 text-xs mt-1">Respondemos em até 24 horas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-stone-50 rounded">
                  <h4 className="font-serif mb-4">Outros Locais</h4>
                  <div className="space-y-4 text-sm text-stone-600">
                    <div>
                      <p className="font-semibold text-stone-900">Paris</p>
                      <p>15 Place Vendôme, 75001</p>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">Londres</p>
                      <p>178 New Bond Street, W1S 4RG</p>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-900">Dubai</p>
                      <p>The Dubai Mall, Fashion Avenue</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border border-stone-200 p-8 shadow-lg">
                  <h4 className="text-2xl font-serif mb-6">Envie-nos uma Mensagem</h4>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-serif mb-2 text-stone-700">Nome Completo *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif mb-2 text-stone-700">Endereço de Email *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif mb-2 text-stone-700">Número de Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif mb-2 text-stone-700">Assunto *</label>
                      <select className="w-full border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors">
                        <option>Consulta Geral</option>
                        <option>Encomenda Personalizada</option>
                        <option>Visualização Privada</option>
                        <option>Pedido Existente</option>
                        <option>Reparos e Serviços</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-serif mb-2 text-stone-700">Mensagem *</label>
                      <textarea 
                        rows="6" 
                        required
                        className="w-full border border-stone-300 px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-stone-900 text-white py-4 text-sm tracking-widest hover:bg-stone-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>ENVIAR MENSAGEM</span>
                    </button>
                    <p className="text-xs text-stone-500 text-center">
                      Ao enviar este formulário, você concorda com nossa Política de Privacidade
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-100 py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h3 className="text-3xl font-serif mb-6">Perguntas Frequentes</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                <div>
                  <h5 className="font-serif mb-2 text-lg">Vocês oferecem envio internacional?</h5>
                  <p className="text-stone-600 text-sm">Sim, enviamos para o mundo todo com seguro completo e embalagem discreta. Os tempos de entrega variam por localização.</p>
                </div>
                <div>
                  <h5 className="font-serif mb-2 text-lg">Qual é sua política de devolução?</h5>
                  <p className="text-stone-600 text-sm">Oferecemos uma política de devolução de 30 dias para peças não usadas em condição original, com reembolso completo.</p>
                </div>
                <div>
                  <h5 className="font-serif mb-2 text-lg">Quanto tempo leva o design personalizado?</h5>
                  <p className="text-stone-600 text-sm">Peças personalizadas geralmente requerem 8-12 semanas desde a aprovação final do design até a conclusão.</p>
                </div>
                <div>
                  <h5 className="font-serif mb-2 text-lg">Vocês fornecem certificados?</h5>
                  <p className="text-stone-600 text-sm">Todas as nossas peças vêm com certificados de autenticidade e certificações de pedras preciosas de laboratórios reconhecidos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h5 className="text-lg font-serif mb-6">Coleções</h5>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><button onClick={() => {setCurrentPage('collections'); setSelectedCategory('Todos'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Todas as Coleções</button></li>
                <li><button onClick={() => {setCurrentPage('collections'); setSelectedCategory('Anéis'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Anéis de Noivado</button></li>
                <li><button onClick={() => {setCurrentPage('collections'); setSelectedCategory('Colares'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Colares</button></li>
                <li><button onClick={() => {setCurrentPage('collections'); setSelectedCategory('Brincos'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Brincos</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-serif mb-6">Serviços</h5>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><button onClick={() => {setCurrentPage('bespoke'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Design Personalizado</button></li>
                <li><button onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Restauração</button></li>
                <li><button onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Avaliações</button></li>
                <li><button onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Visualizações Privadas</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-serif mb-6">Sobre</h5>
              <ul className="space-y-3 text-sm text-stone-400">
                <li><button onClick={() => {setCurrentPage('heritage'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Nossa Herança</button></li>
                <li><button onClick={() => {setCurrentPage('heritage'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Artesanato</button></li>
                <li><button onClick={() => {setCurrentPage('heritage'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Sustentabilidade</button></li>
                <li><button onClick={() => {setCurrentPage('contact'); window.scrollTo(0,0);}} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-serif mb-6">Visite-nos</h5>
              <p className="text-sm text-stone-400 leading-relaxed mb-4">
                Apenas por Consulta<br />
                725 Madison Avenue<br />
                Nova York, NY 10021
              </p>
              <p className="text-sm text-stone-400 mb-4">
                +1 (212) 555-0147
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>© 2025 Maison d'Héritage. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
              <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryJewelry;