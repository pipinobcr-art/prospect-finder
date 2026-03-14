import Link from 'next/link';
import { Target, ArrowRight, Check, Bot, Users, MessageSquare, TrendingUp, Shield, Send, Globe, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f'}}>
      <nav style={{position:'fixed',top:0,width:'100%',zIndex:50,borderBottom:'1px solid #27272f',background:'rgba(10,10,15,0.8)',backdropFilter:'blur(20px)'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <div style={{width:'32px',height:'32px',background:'#14b897',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{color:'white',fontSize:'16px'}}>🎯</span>
            </div>
            <span style={{fontWeight:'bold',color:'white',fontSize:'18px'}}>Prospect Finder</span>
          </div>
          <div style={{display:'flex',gap:'12px'}}>
            <Link href="/auth/login" style={{color:'#9ca3af',textDecoration:'none',padding:'8px 16px',fontSize:'14px'}}>Connexion</Link>
            <Link href="/auth/signup" style={{background:'#14b897',color:'white',textDecoration:'none',padding:'8px 20px',borderRadius:'10px',fontSize:'14px',fontWeight:'600'}}>Essai gratuit</Link>
          </div>
        </div>
      </nav>

      <section style={{paddingTop:'120px',paddingBottom:'80px',paddingLeft:'24px',paddingRight:'24px',textAlign:'center'}}>
        <div style={{maxWidth:'800px',margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(20,184,151,0.1)',border:'1px solid rgba(20,184,151,0.2)',borderRadius:'999px',padding:'8px 16px',color:'#2dd4b0',fontSize:'14px',marginBottom:'32px'}}>
            <span>🤖</span>
            <span>Propulsé par l'IA Claude d'Anthropic</span>
          </div>
          <h1 style={{fontSize:'clamp(36px,6vw,72px)',fontWeight:'bold',color:'white',lineHeight:'1.1',marginBottom:'24px'}}>
            Trouvez vos <span className="gradient-text">clients idéaux</span> automatiquement
          </h1>
          <p style={{fontSize:'20px',color:'#9ca3af',maxWidth:'600px',margin:'0 auto 40px',lineHeight:'1.7'}}>
            Prospect Finder utilise l'IA pour identifier, contacter et convertir vos prospects B2B en pilote automatique.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/auth/signup" style={{background:'#14b897',color:'white',textDecoration:'none',padding:'16px 32px',borderRadius:'12px',fontSize:'16px',fontWeight:'600',display:'inline-flex',alignItems:'center',gap:'8px'}}>
              Commencer gratuitement →
            </Link>
            <a href="#tarifs" style={{background:'#1f1f28',color:'white',textDecoration:'none',padding:'16px 32px',borderRadius:'12px',fontSize:'16px',border:'1px solid #27272f'}}>
              Voir les tarifs
            </a>
          </div>
        </div>

        <div style={{maxWidth:'800px',margin:'60px auto 0',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {[
            {value:'+2 400',label:'Prospects/mois'},
            {value:'68%',label:"Taux d'ouverture"},
            {value:'< 5min',label:'Pour démarrer'},
          ].map(s => (
            <div key={s.label} className="card" style={{padding:'24px',textAlign:'center'}}>
              <div style={{fontSize:'28px',fontWeight:'bold',color:'white'}}>{s.value}</div>
              <div style={{fontSize:'14px',color:'#6b7280',marginTop:'4px'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="tarifs" style={{padding:'80px 24px'}}>
        <div style={{maxWidth:'800px',margin:'0 auto'}}>
          <h2 style={{fontSize:'36px',fontWeight:'bold',color:'white',textAlign:'center',marginBottom:'16px'}}>Tarifs simples</h2>
          <p style={{color:'#6b7280',textAlign:'center',marginBottom:'48px'}}>Résiliez à tout moment. Pas de frais cachés.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
            <div className="card" style={{padding:'32px'}}>
              <div style={{color:'#14b897',fontWeight:'600',fontSize:'14px',marginBottom:'16px'}}>STANDARD</div>
              <div style={{fontSize:'48px',fontWeight:'bold',color:'white',marginBottom:'8px'}}>29€<span style={{fontSize:'16px',color:'#6b7280'}}>/mois</span></div>
              <ul style={{listStyle:'none',padding:0,margin:'24px 0',display:'flex',flexDirection:'column',gap:'10px'}}>
                {['100 prospects/mois','50 messages/mois','Recherche IA','Envoi email','Dashboard'].map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'#d1d5db'}}>
                    <span style={{color:'#14b897'}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup?plan=standard" style={{display:'block',textAlign:'center',background:'#1f1f28',color:'white',textDecoration:'none',padding:'12px',borderRadius:'10px',border:'1px solid #27272f',fontWeight:'500'}}>
                Choisir Standard
              </Link>
            </div>
            <div className="card" style={{padding:'32px',border:'1px solid rgba(20,184,151,0.4)',boxShadow:'0 0 30px rgba(20,184,151,0.1)'}}>
              <div style={{color:'#14b897',fontWeight:'600',fontSize:'14px',marginBottom:'16px'}}>PREMIUM ⭐</div>
              <div style={{fontSize:'48px',fontWeight:'bold',color:'white',marginBottom:'8px'}}>79€<span style={{fontSize:'16px',color:'#6b7280'}}>/mois</span></div>
              <ul style={{listStyle:'none',padding:0,margin:'24px 0',display:'flex',flexDirection:'column',gap:'10px'}}>
                {['1000 prospects/mois','500 messages/mois','Recherche IA avancée','Envoi email + LinkedIn','Envoi automatique','Support prioritaire'].map(f=>(
                  <li key={f} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'#d1d5db'}}>
                    <span style={{color:'#14b897'}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup?plan=premium" style={{display:'block',textAlign:'center',background:'#14b897',color:'white',textDecoration:'none',padding:'12px',borderRadius:'10px',fontWeight:'600'}}>
                Choisir Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer style={{borderTop:'1px solid #27272f',padding:'40px 24px',textAlign:'center',color:'#6b7280',fontSize:'14px'}}>
        © 2025 Prospect Finder. Tous droits réservés.
      </footer>
    </div>
  );
}
