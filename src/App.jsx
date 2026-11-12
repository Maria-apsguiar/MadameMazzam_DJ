import React, { useState } from 'react';
import { 
  Play, 
  Music, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  Disc, 
  Headphones, 
  Instagram, 
  ExternalLink,
  ChevronRight,
  MessageCircle,
  Sliders,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    tipoEvento: 'Beach Club / Sunset',
    formato: 'Performance DJ + Setup Próprio (XDJ-RR)',
    data: '',
    duracaoHoras: '3',
    cepLocal: '',
    cidade: '',
    observacoes: ''
  });

  const whatsappNumber = "5511963274804";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const mensagem = `Olá DJ Madame Mazzam! Gostaria de consultar disponibilidade e orçamento para apresentação:
• Nome / Responsável: ${formData.nome || 'Não informado'}
• Tipo de Evento: ${formData.tipoEvento}
• Formato de Show: ${formData.formato}
• Data Prevista: ${formData.data || 'A definir'}
• Tempo estimado de set: ${formData.duracaoHoras} hora(s)
• CEP / Localidade: ${formData.cepLocal || 'Não informado'} (${formData.cidade || 'Não informada'})
• Observações adicionais: ${formData.observacoes || 'Nenhuma'}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. TOPO: AVISO ESTRATÉGICO DE TEMPORADA & AGENDA */}
      <aside aria-label="Aviso de Temporada" className="bg-gradient-to-r from-amber-950/60 via-zinc-900 to-amber-950/60 border-b border-amber-500/20 px-4 py-2.5 text-xs sm:text-sm text-center font-medium tracking-wide">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-300">
          <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold uppercase tracking-wider text-[11px] bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
            <Radio className="w-3 h-3 animate-pulse" /> Status de Agenda
          </span>
          <span>
            <strong className="text-zinc-100">Temporada Nordeste (19/11 a 16/12):</strong> Apresentações pontuais com som local (apenas performance).
          </span>
          <span className="hidden md:inline text-zinc-600">•</span>
          <span className="text-amber-300/90 font-medium">
            Agenda Oficial 2026/2027 aberta a partir de 17/12.
          </span>
        </div>
      </aside>

      {/* HEADER / NAVEGAÇÃO */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#08080a]/85 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-serif tracking-widest text-zinc-100 uppercase font-light">
              Madame <span className="text-amber-400 font-normal">Mazzam</span>
            </span>
            <span className="text-[10px] tracking-[0.28em] text-zinc-400 uppercase -mt-1 font-mono">
              Curadoria & Identidade Musical
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-zinc-400 font-medium">
            <a href="#experiencia" className="hover:text-amber-400 transition-colors">Sets & Vídeo</a>
            <a href="#estilos" className="hover:text-amber-400 transition-colors">Sonoridade</a>
            <a href="#formatos" className="hover:text-amber-400 transition-colors">Formatos & Rider</a>
            <a href="#presskit" className="hover:text-amber-400 transition-colors">Press Kit</a>
          </nav>

          <a 
            href="#orcamento"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-semibold px-4 sm:px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25"
          >
            <span>Reservar Data</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION COM ENQUADRAMENTO CORRIGIDO (ROSTO VISÍVEL) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div 
          className="absolute inset-0 bg-cover bg-[center_top_10%] z-0 filter brightness-60 contrast-110"
          style={{ 
            backgroundImage: `url('/images/hero-night.jpg'), url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1800')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-[#08080a]/30 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#08080a]/80 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-sm mb-6 text-zinc-300 text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            House • Melodic • Afrohouse • Nu Disco
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-white mb-6 uppercase font-light leading-none">
            Elegância, Ritmo e <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              Presença de Pista
            </span>
          </h1>

          <p className="text-zinc-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md">
            A trilha sonora perfeita para restaurantes de alta gastronomia, sunsets exclusivos, 
            beach clubs e celebrações corporativas de alto padrão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#orcamento" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Consultar Agenda & Orçamento</span>
            </a>
            <a 
              href="#experiencia" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium px-7 py-4 rounded-xl text-xs uppercase tracking-widest transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>Ver Apresentação</span>
            </a>
          </div>
        </div>
      </section>

      
{/* 3. SETS, VÍDEO & EXPERIÊNCIA AUDITIVA (PLAYERS INTERATIVOS DIRETOS) */}
      <section id="experiencia" className="py-20 border-t border-zinc-800/60 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.25em] block mb-2">Live Session & Áudios</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide uppercase">Ouça a Sonoridade</h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0 font-light">
              Dê o play diretamente na página e sinta a construção da pista: do pôr do sol ao ápice da celebração noturna.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* VÍDEO DO YOUTUBE */}
            <div className="lg:col-span-7 bg-zinc-900/90 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl p-4">
              <div className="flex items-center justify-between pb-3 px-1 border-b border-zinc-800/80 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">Set Oficial no YouTube</span>
                </div>
                <a 
                  href="https://youtu.be/-Ni9VMmRRUM?si=8Qgz0cpaokXfmK5v" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-medium"
                >
                  Abrir no App <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/-Ni9VMmRRUM?rel=0&modestbranding=1" 
                  title="DJ Madame Mazzam - Live Set" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                />
              </div>

              <p className="text-xs text-zinc-400 mt-3 px-1 font-light leading-relaxed">
                Gravado ao vivo na controladora Pioneer XDJ-RR. Transição fluida com presença marcante de palco e pista[cite: 2].
              </p>
            </div>

            {/* 3 PLAYERS INCORPORADOS DO SOUNDCLOUD COM PLAY DIRETO */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* SET 1: AFROHOUSE & HOUSE */}
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-500/40 shadow-lg">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                      <Disc className="w-4 h-4 animate-spin-slow" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-amber-400 tracking-wider block">SoundCloud Oficial</span>
                      <h3 className="text-zinc-100 font-medium text-xs">Set Afrohouse & House - Madame Mazzam[cite: 2]</h3>
                    </div>
                  </div>
                  <a 
                    href="https://soundcloud.com/madame_mazzam/set-afrohouse-house-madame" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-zinc-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Link <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black">
                  <iframe 
                    width="100%" 
                    height="120" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay; encrypted-media" 
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2344417571&color=%23f59e0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                  />
                </div>
              </div>

              {/* SET 2: SUNSET ORGANIC HOUSE */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 shadow-md">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-zinc-800 text-amber-300">
                      <Music className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider block">Sunset Session</span>
                      <h3 className="text-zinc-100 font-medium text-xs">Sunset Organic House — Live at Shopping[cite: 2]</h3>
                    </div>
                  </div>
                  <a 
                    href="https://soundcloud.com/madame_mazzam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-zinc-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Perfil <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black">
                  <iframe 
                    width="100%" 
                    height="120" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay; encrypted-media" 
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/madame_mazzam&color=%23f59e0b&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                  />
                </div>
              </div>

              {/* SET 3: MINI SET #1 */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 shadow-md">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-zinc-800 text-amber-300">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider block">House Sofisticado</span>
                      <h3 className="text-zinc-100 font-medium text-xs">Mini Set #1 [30 min][cite: 2]</h3>
                    </div>
                  </div>
                  <a 
                    href="https://soundcloud.com/madame_mazzam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-zinc-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    Perfil <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black">
                  <iframe 
                    width="100%" 
                    height="120" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay; encrypted-media" 
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/madame_mazzam&color=%23f59e0b&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. CURADORIA & IDENTIDADE MUSICAL */}
      <section id="estilos" className="py-20 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.25em] block mb-2">Identidade Sonora</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white uppercase tracking-wide">
              Curadoria & Identidade Musical
            </h2>
            <p className="text-zinc-400 text-sm mt-3 font-light">
              Música não é mero ruído de fundo: é a assinatura emocional de um ambiente. Cada repertório é ajustado ao público e à energia do espaço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Restaurantes & Gastronomia",
                desc: "Volume e sonoridade calibrados para valorizar a conversa e a alta gastronomia com Deep, Lounge e Nu Disco.",
                tags: ["Nu Disco", "Deep House", "Lounge"]
              },
              {
                title: "Beach Clubs & Sunsets",
                desc: "Transição do entardecer para a noite com batidas solares, percussão afro e melodias envolventes.",
                tags: ["Afrohouse", "Melodic House", "Organic"]
              },
              {
                title: "Beach Tennis & Esportivos",
                desc: "Vibe vibrante e dinâmica que impulsiona a energia dos atletas e do público nas arenas.",
                tags: ["Jackin House", "Vocal House", "Upbeat"]
              },
              {
                title: "Corporativo & Confraternizações",
                desc: "Do coquetel receptivo elegante ao momento de celebração e comemoração da equipe.",
                tags: ["House Sofisticado", "Classics", "Open Format House"]
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono bg-zinc-800/80 text-amber-300/80 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FORMATOS DE APRESENTAÇÃO & RIDER TÉCNICO */}
      <section id="formatos" className="py-20 border-t border-zinc-800/60 bg-zinc-950/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.25em] block mb-2">Estrutura & Rider</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white uppercase tracking-wide">
              Formatos de Apresentação
            </h2>
            <p className="text-zinc-400 text-sm mt-3 font-light">
              Opções transparentes para atender desde casas com estrutura instalada até eventos que necessitam de equipamento próprio ou sonorização total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* OPÇÃO 1 */}
            <div className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">Opção 01</span>
                <h3 className="text-xl font-serif text-white mb-2">Performance DJ</h3>
                <p className="text-zinc-400 text-xs font-light mb-6">
                  Ideal para clubs, bares e eventos que já possuem cabine completa e sistema de som próprio alinhado.
                </p>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Apresentação artística da DJ Madame Mazzam</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Curadoria musical personalizada pré-evento</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Fone Pioneer DJ de alta precisão</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-400">
                    <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>O contratante fornece Pioneer CDJ/XDJ + Sistema de PA</span>
                  </li>
                </ul>
              </div>

              <a 
                href="#orcamento"
                className="w-full text-center py-3 rounded-xl border border-zinc-700 hover:border-amber-400 text-zinc-200 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Cotar Performance
              </a>
            </div>

            {/* OPÇÃO 2 */}
            <div className="p-7 rounded-2xl bg-zinc-900/90 border-2 border-amber-500/60 relative flex flex-col justify-between shadow-2xl shadow-amber-950/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-zinc-950 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                Mais Solicitado
              </div>

              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-2">Opção 02</span>
                <h3 className="text-xl font-serif text-white mb-2">Performance + Rider Próprio</h3>
                <p className="text-zinc-400 text-xs font-light mb-6">
                  A solução ideal para restaurantes, condomínios e lounges que já têm caixas de som mas precisam do setup da DJ.
                </p>

                <ul className="space-y-3 text-xs text-zinc-200 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Apresentação artística da DJ Madame Mazzam</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Controladora Pioneer XDJ-RR</strong> (Equipamento Próprio)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Headphone Pioneer DJ</strong> de alta precisão</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Cabeamento de áudio profissional</strong> (XLR balanceado / RCA)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Curadoria musical personalizada pré-evento</span>
                  </li>
                </ul>
              </div>

              <a 
                href="#orcamento"
                className="w-full text-center py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-amber-500/20"
              >
                Solicitar Este Formato
              </a>
            </div>

            {/* OPÇÃO 3 */}
            <div className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">Opção 03</span>
                <h3 className="text-xl font-serif text-white mb-2">Full Experience</h3>
                <p className="text-zinc-400 text-xs font-light mb-6">
                  Para eventos que necessitam de estrutura completa de sonorização externa e montagem no local.
                </p>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Apresentação artística da DJ Madame Mazzam</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Controladora Pioneer XDJ-RR + Fone Pioneer DJ</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Sistema de sonorização dimensionado</strong> (Caixa de som profissional)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Logística, montagem e teste de som inclusos</span>
                  </li>
                </ul>
              </div>

              <a 
                href="#orcamento"
                className="w-full text-center py-3 rounded-xl border border-zinc-700 hover:border-amber-400 text-zinc-200 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Cotar com Sonorização
              </a>
            </div>

          </div>

          <div className="mt-12 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs text-zinc-300 font-light">
                <span className="font-semibold text-zinc-100">Condições de Contratação Segura: </span> 
                Reserva de data mediante sinal de 50% via contrato formal de prestação de serviços e 50% até 1 dia antes do evento.
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-800 px-2.5 py-1 rounded shrink-0">
              Padrão Profissional
            </span>
          </div>

        </div>
      </section>

      {/* 6. PRESS KIT / GALERIA DE FOTOS (SEM O TEXTO LOOK PRETO RENDADO) */}
      <section id="presskit" className="py-20 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.25em] block mb-2">Material Promocional</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide uppercase">Press Kit & Galeria</h2>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <a 
                href="https://www.instagram.com/madamemazzam_dj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 px-4 py-2 rounded-lg text-xs font-medium transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@madamemazzam_dj</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                src: "/images/hero-night.jpg",
                fallback: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
                title: "Vibe Night / Club & Skyline",
                tag: "Editorial Noturno"
              },
              {
                src: "/images/sunset-pioneer.jpg",
                fallback: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=800",
                title: "Vibe Sunset / Golden Hour",
                tag: "Live Performance"
              },
              {
                src: "/images/night-bw.jpg",
                fallback: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800",
                title: "Editorial Night P&B",
                tag: "Visual Identity"
              },
              {
                src: "/images/sunset-closeup.jpg",
                fallback: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
                title: "Beach Clubs & Sunsets",
                tag: "Day Events"
              }
            ].map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-zinc-800">
                <img 
                  src={img.src} 
                  alt={img.title}
                  onError={(e) => {
                    e.currentTarget.src = img.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    {img.tag}
                  </span>
                  <h4 className="text-zinc-100 font-serif text-sm font-light">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-400 text-xs mt-6 font-light">
            * Para materiais em altíssima resolução para impressão de flyers e artes de divulgação, solicite o link do Google Drive no WhatsApp.
          </p>
        </div>
      </section>

      {/* 7. FORMULÁRIO DE ORÇAMENTO */}
      <section id="orcamento" className="py-20 border-t border-zinc-800/60 bg-gradient-to-b from-[#08080a] to-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-[0.25em] block mb-2">Agendamento & Cotação</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide uppercase">
              Consultar Disponibilidade
            </h2>
            <p className="text-zinc-400 text-sm mt-3 font-light">
              Preencha os detalhes do evento para receber uma cotação precisa com logística calculada diretamente no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                  Seu Nome ou Empresa
                </label>
                <input 
                  type="text" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Ex: Marina Santos (Clube / Restaurante)"
                  required
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                  Tipo de Evento / Local
                </label>
                <select 
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                >
                  <option value="Restaurante / Alta Gastronomia">Restaurante / Alta Gastronomia</option>
                  <option value="Beach Club / Sunset">Beach Club / Sunset</option>
                  <option value="Torneio Beach Tennis / Esportivo">Torneio Beach Tennis / Esportivo</option>
                  <option value="Evento Corporativo / Confraternização">Evento Corporativo / Confraternização</option>
                  <option value="Festa Privada / Aniversário">Festa Privada / Aniversário</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                  Data Pretendida
                </label>
                <input 
                  type="date" 
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                  Duração Estimada do Set (Horas)
                </label>
                <input 
                  type="number" 
                  name="duracaoHoras"
                  min="1"
                  max="12"
                  value={formData.duracaoHoras}
                  onChange={handleInputChange}
                  placeholder="Ex: 3 ou 4 horas"
                  required
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                  CEP do Local / Bairro
                </label>
                <input 
                  type="text" 
                  name="cepLocal"
                  value={formData.cepLocal}
                  onChange={handleInputChange}
                  placeholder="Ex: 01415-000 / Jardins"
                  required
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                  Cidade / UF
                </label>
                <input 
                  type="text" 
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  placeholder="Ex: São Paulo - SP"
                  required
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                Formato Pretendido
              </label>
              <select 
                name="formato"
                value={formData.formato}
                onChange={handleInputChange}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
              >
                <option value="Performance DJ + Setup Próprio (XDJ-RR)">
                  Performance DJ + Setup Próprio (Controladora Pioneer XDJ-RR + Fone Pioneer DJ)
                </option>
                <option value="Apenas Performance DJ (Local já tem rider e som)">
                  Apenas Performance DJ (Local já possui CDJ/XDJ e sonorização)
                </option>
                <option value="Full Experience (Performance + Setup + Sonorização)">
                  Full Experience (Performance + Setup + Caixa de som profissional sob medida)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-zinc-300 mb-2">
                Observações ou Pedidos Especiais
              </label>
              <textarea 
                name="observacoes"
                rows="3"
                value={formData.observacoes}
                onChange={handleInputChange}
                placeholder="Ex: Horário de início previsto, perfil de público, evento diurno ou noturno..."
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enviar Detalhes e Iniciar Cotação no WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 py-12 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-serif tracking-widest text-zinc-100 uppercase font-light">
              Madame <span className="text-amber-400 font-normal">Mazzam</span>
            </span>
            <p className="text-xs text-zinc-400 mt-1">
              Música eletrônica e sofisticação para os melhores momentos.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a 
              href="https://www.instagram.com/madamemazzam_dj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://youtu.be/-Ni9VMmRRUM?si=8Qgz0cpaokXfmK5v" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              YouTube
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="text-[11px] text-zinc-400 font-mono">
            © 2026 Madame Mazzam. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de consultar a disponibilidade da DJ Madame Mazzam para um evento.")}`}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Falar com a DJ no WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 transition-all flex items-center justify-center border-2 border-emerald-300/30"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

    </div>
  );
}
