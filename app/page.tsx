'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f',fontFamily:'system-ui,sans-serif'}}>

      <nav style={{position:'fixed',top:0,width:'100%',zIndex:50,borderBottom:'1px solid #1f1f28',background:'rgba(10,10,15,0.9)',backdropFilter:'blur(20px)'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px',height:'68px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <div style={{width:'36px',height:'36px',background:'#14b897',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px'}}>🎯</div>
            <span style={{fontWeight:'800',color:'white',fontSize:'20px'}}>Prospect Finder</span>
          </div>
          <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
            <Link href="/auth/login" style={{color:'#9ca3af',textDecoration:'none',padding:'8px 16px',fontSize:'14px'}}>Connexion</Link>
            <Link href="/auth/signup" style={{background:'#14b897',color:'white',textDecoration:'none',padding:'10px 22px',borderRadius:'10px',fontSize:'14px',fontWeight:'700'}}>Commencer →</Link>
          </div>
        </div>
      </nav>

      <section style={{paddingTop:'140px',paddingBottom:'100px',textAlign:'center',padding:'140px 24px 100px',position:'relative'}}>
        <div style={{maxWidth:'860px',margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(20,184,151,0.08)',border:'1px solid rgba(20,184,151,0.2)',borderRadius:'999px',padding:'8px 20px',color:'#2dd4b0',fontSize:'13px',fontWeight:'600',marginBottom:'36px'}}>
            🤖 PROPULSÉ PAR L'IA CLAUDE D'ANTHROPIC
          </div>
          <h1 style={{fontSize:'clamp(40px,7vw,80px)',fontWeight:'900',color:'white',lineHeight:'1.05',marginBottom:'28px',letterSpacing:'-2px'}}>
            Trouvez vos clients<br/>
            <span style={{background:'linear-gradient(135deg,#14b897,#5ce9c9)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>en pilote automatique</span>
          </h1>
          <p style={{fontSize:'20px',color:'#9ca3af',maxWidth:'580px',margin:'0 auto 48px',lineHeight:'1.7'}}>
            L'IA trouve vos prospects B2B, rédige des messages personnalisés et les envoie automatiquement.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginBottom:'24px'}}>
            <Link href="/auth/signup" style={{background:'#14b897',color:'white',textDecoration:'none',padding:'18px 36px',borderRadius:'14px',fontSize:'17px',fontWeight:'700'}}>Démarrer gratuitement →</Link>
            <a href="#tarifs" style={{color:'white',textDecoration:'none',padding:'18px 36px',borderRadius:'14px',fontSize:'17px',fontWeight:'600',border:'1px solid #27272f'}}>Voir les tarifs</a>
          </div>
          <p style={{color:'#4b5563',fontSize:'14px'}}>✓ 14 jours gratuits · ✓ Sans carte bancaire · ✓ Résiliation en 1 clic</p>
        </div>

        <div style={{maxWidth:'700px',margin:'80px auto 0',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {[{value:'+2 400',label:'Prospects/mois',icon:'👥'},{value:'68%',label:"Taux d'ouverture",icon:'📬'},{value:'< 5min',label:'Pour démarrer',icon:'⚡'}].map(s=>(
