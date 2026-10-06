import {
  ArrowUpRight,
  ChevronRight,
  Globe2,
  Instagram,
  Music2,
  Pin,
  Play,
  Send,
  Share2,
  Sparkles,
  Youtube,
} from 'lucide-react';

const primaryLinks = [
  {
    label: 'Conheça a Eixo Consórcios',
    description: 'Escolha seu próximo passo com segurança',
    href: 'https://www.eixoconsorcios.com.br',
    icon: Globe2,
    featured: true,
  },
  {
    label: 'Portal de Representantes',
    description: 'Acesse a plataforma Credencia',
    href: 'https://credenciarepresentantes.com.br',
    icon: Share2,
  },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/eixoconsorcios', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/people/Eixo-Cons%C3%B3rcios/61577656551255', icon: Share2 },
  { label: 'TikTok', href: 'https://www.tiktok.com/@_eixo.consorcios_', icon: Music2 },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCvqHzk8jkgN8ytsB0FACWAg', icon: Youtube },
  { label: 'Pinterest', href: 'https://br.pinterest.com/eixoconsorcios', icon: Pin },
  { label: 'X', href: 'https://x.com/eixoconsorcios', icon: () => <span className="brand-letter">X</span> },
  { label: 'Threads', href: 'https://www.threads.com/@eixoconsorcios', icon: Send },
];

function App() {
  return (
    <main className="page-shell">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-top" aria-hidden="true" />
      <div className="ambient ambient-bottom" aria-hidden="true" />

      <section className="profile-card" aria-label="Eixo Consórcios">
        <header className="profile-header">
          <div className="logo-frame">
            <img src="/logo2.png" alt="Eixo Consórcios" className="brand-logo" />
          </div>
          <div className="profile-copy">
            <div className="eyebrow"><Sparkles size={13} /> Planeje. Conquiste. Realize.</div>
            <h1>Eixo Consórcios</h1>
            <p>Seu caminho para realizar grandes planos.</p>
          </div>
          <div className="verified-mark" aria-label="Perfil verificado">✓</div>
        </header>

        <div className="intro-line">
          <span>Encontre tudo em um só lugar</span>
          <span className="line" />
        </div>

        <div className="link-stack">
          {primaryLinks.map(({ label, description, href, icon: Icon, featured }) => (
            <a
              key={label}
              href={href}
              className={`main-link ${featured ? 'main-link-featured' : ''}`}
            >
              <span className="link-icon"><Icon size={20} strokeWidth={1.8} /></span>
              <span className="link-content">
                <strong>{label}</strong>
                <small>{description}</small>
              </span>
              <ArrowUpRight className="link-arrow" size={19} strokeWidth={1.8} />
            </a>
          ))}
        </div>

        <div className="social-heading">
          <span>Conecte-se com a Eixo</span>
          <span className="line" />
        </div>

        <nav className="social-grid" aria-label="Redes sociais">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="social-link" aria-label={label}>
              <Icon size={19} strokeWidth={1.7} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <footer className="profile-footer">
          <div className="footer-divider" />
          <p>Consórcio é planejamento. A realização é Eixo.</p>
          <a className="footer-site" href="https://www.eixoconsorcios.com.br">
            eixoconsorcios.com.br <ChevronRight size={14} />
          </a>
        </footer>
      </section>

      <div className="page-badge"><Play size={12} fill="currentColor" /> EIXO CONSÓRCIOS</div>
    </main>
  );
}

export default App;
