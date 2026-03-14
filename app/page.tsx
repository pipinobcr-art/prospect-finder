'use client';
import { useState, Suspense } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'standard';
  const supabase = createClient();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: fullName } },
    });
    if (error) { setError(error.message); setLoading(false); }
    else router.push(`/billing?plan=${plan}&new=1`);
  }

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0f',display:'flex',alignItems:'center',justifyContent:'center',padding:'16px'}}>
      <div style={{width:'100%',maxWidth:'420px'}}>
        <div style={{textAlign:'center',marginBottom:'32px'}}>
          <Link href="/" style={{display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none',marginBottom:'24px'}}>
            <div style={{width:'40px',height:'40px',background:'#14b897',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>🎯</div>
            <span style={{fontSize:'20px',fontWeight:'bold',color:'white'}}>Prospect Finder</span>
          </Link>
          <h1 style={{fontSize:'24px',fontWeight:'bold',color:'white',margin:'0 0 8px'}}>Créer votre compte</h1>
          <p style={{color:'#6b7280',margin:0}}>Plan <span style={{color:'#14b897',fontWeight:'600',textTransform:'capitalize'}}>{plan}</span> — {plan==='premium'?'79€':'29€'}/mois</p>
        </div>
        <div className="card" style={{padding:'32px'}}>
          <form onSubmit={handleSignup}>
            {error && <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.3)',borderRadius:'10px',padding:'12px',color:'#f87171',fontSize:'14px',marginBottom:'20px'}}>{error}</div>}
            <div style={{marginBottom:'16px'}}>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',color:'#d1d5db',marginBottom:'8px'}}>Nom complet</label>
              <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} className="input-dark" placeholder="Jean Dupont" required />
            </div>
            <div style={{marginBottom:'16px'}}>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',color:'#d1d5db',marginBottom:'8px'}}>Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-dark" placeholder="jean@entreprise.com" required />
            </div>
            <div style={{marginBottom:'24px'}}>
              <label style={{display:'block',fontSize:'14px',fontWeight:'500',color:'#d1d5db',marginBottom:'8px'}}>Mot de passe</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input-dark" placeholder="8 caractères minimum" minLength={8} required />
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{width:'100%'}}>
              {loading ? 'Création...' : 'Créer mon compte →'}
            </button>
          </form>
          <p style={{textAlign:'center',fontSize:'14px',color:'#6b7280',marginTop:'24px'}}>
            Déjà un compte ? <Link href="/auth/login" style={{color:'#14b897',textDecoration:'none',fontWeight:'500'}}>Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div style={{minHeight:'100vh',background:'#0a0a0f',display:'flex',alignItems:'center',justifyContent:'center'}}><p style={{color:'white'}}>Chargement...</p></div>}>
      <SignupForm />
    </Suspense>
  );
}
