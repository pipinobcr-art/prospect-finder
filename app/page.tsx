import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f',fontFamily:'system-ui,sans-serif'}}>

      {/* NAV */}
      <nav style={{position:'fixed',top:0,width:'100%',zIndex:50,borderBottom:'1px solid #1f1f28',background:'rgba(10,10,15,0.9)',backdropFilter:'blur(20px)'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px',height:'68px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <div style={{width:'36px',height:'36px',background:'linear-gradient(135deg,#14b897,#0d7862)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px'}}>🎯</div>
            <span style={{fontWeight:'800',color:'white',fontSize:'20px',letterSpacing:'-0.5px'}}>Prospect Finder</span>
          </div>
          <div style={{display:'none',gap:'32px',alignItems:'center'}}>
            <a href="#fonctionnalites" style={{color:'#9ca3af',textDecoration:'none',fontSize:'15px'}}>Fonctionnalités</a>
            <a href="#tarifs" style={{color:'#9ca3af',textDecoration:'none',fontSize:'15px'}}>Tarifs</a>
          </div>
          <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
            <Link href="/auth/login" style={{color:'#9ca3af',textDecoration:'none',padding:'8px 16px',fontSize:'14px',fontWeight:'500'}}>Connexion</Link>
            <Link href="/auth/signup" style={{background:'#14b897',color:'white',textDecoration:'none',padding:'10px 22px',borderRadius:'10px',fontSize:'14px',fontWeight:'700',letterSpacing:'-0.2px'}}>Commencer →</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{paddingTop:'140px',paddingBottom:'100px',paddingLeft:'24px',paddingRight:'24px',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'600px',height:'600px',background:'radial-gradient(circle,rgba(20,184,151,0.07) 0%,transparent 70%)',pointerEvents:'none'}}/>
        <div style={{maxWidth:'860px',margin:'0 auto',position:'relative'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(20,184,151,0.08)',border:'1px solid rgba(20,184,151,0.2)',borderRadius:'999px',padding:'8px 20px',color:'#2dd4b0',fontSize:'13px',fontWeight:'600',marginBottom:'36px',letterSpacing:'0.5px'}}>
            🤖 PROPULSÉ PAR L'IA CLAUDE D'ANTHROPIC
          </div>
          <h1 style={{fontSize:'clamp(40px,7vw,80px)',fontWeight:'900',color:'white',lineHeight:'1.05',marginBottom:'28px',letterSpacing:'-2px'}}>
            Trouvez vos clients<br/>
            <span style={{background:'linear-gradient(135deg,#14b897 0%,#5ce9c9 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
              en pilote automatique
            </span>
          </h1>
          <p style={{fontSize:'20px',color:'#9ca3af',maxWidth:'580px',margin:'0 auto 48px',lineHeight:'1.7',fontWeight:'400'}}>
            L'IA trouve vos prospects B2B, rédige des messages ultra-personnalisés et les envoie automatiquement par email ou LinkedIn.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginBottom:'48px'}}>
            <Link href="/auth/signup" style={{background:'#14b897',color:'white',textDecoration:'none',padding:'18px 36px',borderRadius:'14px',fontSize:'17px',fontWeight:'700',display:'i
