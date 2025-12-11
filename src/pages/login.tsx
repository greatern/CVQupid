// pages/Login.tsx
import React, { useState } from 'react';
import { Container, PrimaryButton, Card } from '../components/Layout';
import { THEME } from '../theme';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, UserGroupIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function Login() {
  const [userType, setUserType] = useState<'candidate' | 'mentor' | 'company'>('candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === 'company') nav('/company-dashboard');
    if (userType === 'mentor') nav('/mentor');
    if (userType === 'candidate') nav('/candidate');
  };

  const userTypes = [
    { key: 'candidate', label: 'Candidate', icon: <UserIcon className="h-6 w-6" /> },
    { key: 'mentor', label: 'Mentor', icon: <UserGroupIcon className="h-6 w-6" /> },
    { key: 'company', label: 'Company', icon: <BuildingOffice2Icon className="h-6 w-6" /> },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${THEME.primaryLight} 0%, #fff 100%)`,
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem 0',
      }}
    >
      {/* Floating shapes */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-60px', width: '200px', height: '200px',
        background: 'rgba(255, 192, 203, 0.3)', borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite alternate',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-80px', width: '250px', height: '250px',
        background: 'rgba(144, 238, 144, 0.3)', borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite alternate-reverse',
      }} />

      <Container>
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Welcome Section */}
          <div style={{ flex: '1 1 300px', minWidth: 280 }}>
            <h1 style={{ marginTop: 0, fontSize: '2rem', fontWeight: 700 }}>Welcome back to CVQupid</h1>
            <p style={{ color: THEME.muted, fontSize: 14 }}>
              Sign in to continue — access your dashboard, chat with mentors, and view candidate matches.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
              {userTypes.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setUserType(t.key as 'candidate' | 'mentor' | 'company')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '10px 14px',
                    borderRadius: 12,
                    border: userType === t.key ? `2px solid ${THEME.primary}` : '1px solid rgba(0,0,0,0.08)',
                    background: userType === t.key ? 'rgba(49,232,198,0.2)' : '#fff',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: '0.3s',
                  }}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <div style={{ flex: '1 1 300px', minWidth: 280 }}>
            <Card style={{
              backdropFilter: 'blur(12px)',
              background: 'rgba(255,255,255,0.3)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
            }}>
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <label style={{ fontSize: 13, color: THEME.muted }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: 12,
                    borderRadius: 12,
                    border: '1px solid rgba(0,0,0,0.1)',
                    outline: 'none',
                    transition: '0.3s',
                  }}
                  placeholder="you@example.com"
                />

                <label style={{ fontSize: 13, color: THEME.muted }}>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    padding: 12,
                    borderRadius: 12,
                    border: '1px solid rgba(0,0,0,0.1)',
                    outline: 'none',
                    transition: '0.3s',
                  }}
                  placeholder="Enter your password"
                />

                <PrimaryButton type="submit" style={{ marginTop: 10 }}>
                  Sign in as {userType}
                </PrimaryButton>

                <div style={{ fontSize: 13, color: THEME.muted, textAlign: 'center', marginTop: 8 }}>
                  Don't have an account?{' '}
                  <Link to="/register-company" style={{ color: THEME.primaryDark, fontWeight: 600 }}>
                    Register
                  </Link>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Container>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          input:focus {
            border-color: ${THEME.primary};
            box-shadow: 0 0 8px rgba(49,232,198,0.4);
          }
        `}
      </style>
    </div>
  );
}
