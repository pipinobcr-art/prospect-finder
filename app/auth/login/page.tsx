'use client';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); setLoading(false); }
    else router.push('/dashboard');
  }

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f',display:'flex',alignItems:'center',justifyContent:'center',padding:'16px'}}>
      <div style={{width:'100%',maxWidth:'420px'}}>
        <div style={{textAlign:'center',marginBottom:'32px'}}>
          <Link href="/" style={{display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none',marginBottom:'24px'}}>
            <div style={{width:'40px',height:'40px',background:'#14b897',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>🎯</div>
            <span style={{fontSize:'20px',fontWeight:'bold',color:'white'}}>Prospect Finder</span>
          </Link>
          <h1 style={{fontSize:'24px',fontWeight:'bold',color:'white',margin:'0 0 8px'}}>Bon retour 👋</h1>
          <p style={{color:'#6b7280',margin:0}}>Connectez-vous à votre compte</p>
        </div>
        <div className="card" style={{padding:'32px'}}>
          <form onSubmit={handleLogin}>
            {error && <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'10px',padding:'12px',color:'#f87171',fontSize:'14px',marginBottom:'20px'}}>{error}</div>}
            <div style={{marginBottom:'20px'}}>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',color:'#d1d5db',marginBottom:'8px'}}>Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-dark" placeholder="vous@example.com" required />
            </div>
            <div style={{marginBottom:'24px'}}>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',color:'#d1d5db',marginBottom:'8px'}}>Mot de passe</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input-dark" placeholder="••••••••" required />
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{width:'100%'}}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
          <p style={{textAlign:'center',fontSize:'14px',color:'#6b7280',marginTop:'24px'}}>
            Pas de compte ? <Link href="/auth/signup" style={{color:'#14b897',textDecoration:'none',fontWeight:'500'}}>Créer un compte</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
