// components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { THEME } from '../theme';

const glassStyle = (overrides: React.CSSProperties = {}) => ({
  background: 'rgba(255,255,255,0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: 12,
  ...overrides,
});

export const Header: React.FC = () => {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'18px 28px', position:'sticky', top:0, zIndex:40,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.55))',
      backdropFilter:'blur(6px)', borderBottom:'1px solid rgba(0,0,0,0.04)'
    }}>
      <Link to="/" style={{display:'flex',gap:12,alignItems:'center', textDecoration:'none'}}>
        <img 
          src="src/assets/img/cvqupidLogo.jpeg" 
          alt="CVQupid Logo" 
          style={{ width:98, height:58, objectFit:'cover' }}
        />

      </Link>

      <nav style={{display:'flex', gap:12, alignItems:'center'}}>
        <Link to="/explore" style={{color:THEME.dark, textDecoration:'none'}}>Explore</Link>
        <Link to="/login" style={{color:THEME.dark, textDecoration:'none'}}>Sign In</Link>
        <Link to="/register-company" style={{padding:'8px 12px', background:THEME.primary, borderRadius:10, color:'#012', textDecoration:'none', fontWeight:700}}>For Companies</Link>
      </nav>
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer style={{padding:28, display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, borderTop:'1px solid rgba(0,0,0,0.04)', marginTop:40}}>
    <div style={{display:'flex', gap:12, alignItems:'center'}}>
      <div style={{width:42, height:42, background:THEME.primary, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center'}}>CVQ</div>
      <div>
        <div style={{fontWeight:700}}>CVQupid</div>
        <div style={{fontSize:12, color:THEME.muted}}>Registered NPO / PBO</div>
      </div>
    </div>
    <div style={{display:'flex',gap:18, alignItems:'center', color:THEME.muted}}>
      <span>Contact: hello@cvqupid.org</span>
      <span>Privacy</span>
      <span>Terms</span>
    </div>
  </footer>
);

export const Container: React.FC<{children?: React.ReactNode}> = ({children}) => (
  <div style={{maxWidth:1200, margin:'0 auto', padding:'28px 20px'}}>{children}</div>
);

export const Card: React.FC<{children?: React.ReactNode, style?: React.CSSProperties}> = ({children, style}) => (
  <div style={{...glassStyle({padding:16}), ...style}}>{children}</div>
);

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, style, ...rest}) => (
  <button {...rest} style={{background:THEME.primary, border:'none', color:'#012', padding:'10px 14px', borderRadius:10, fontWeight:700, cursor:'pointer', ...style}}>{children}</button>
);
