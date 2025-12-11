// pages/Register.tsx
import React, { useState } from 'react';
import { Container, Card, PrimaryButton } from '../components/Layout';
import { THEME } from '../theme';
import { UserIcon, UserGroupIcon, BuildingOffice2Icon, AcademicCapIcon } from '@heroicons/react/24/outline';

type UserType = 'candidate' | 'mentor' | 'company';

export default function Register() {
  const [userType, setUserType] = useState<UserType>('candidate');
  const [form, setForm] = useState<any>({});

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const submit = () => {
    console.log(userType, form);
    alert('Saved (frontend only)');
  };

  const userTypes = [
    { key: 'candidate', label: 'Candidate', icon: <UserIcon className="h-6 w-6" /> },
    { key: 'mentor', label: 'Mentor', icon: <UserGroupIcon className="h-6 w-6" /> },
    { key: 'company', label: 'Company', icon: <BuildingOffice2Icon className="h-6 w-6" /> },
  ];

  const candidateFields = [
    { label: 'Full Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Degree / Qualification', key: 'degree' },
    { label: 'NQF Level', key: 'nqf' },
    { label: 'Career Interests', key: 'career' },
    { label: 'Skills', key: 'skills' },
  ];

  const mentorFields = [
    { label: 'Full Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Company', key: 'company' },
    { label: 'Skills Required', key: 'skillsRequired' },
    { label: 'Availability', key: 'availability' },
  ];

  const companyFields = [
    { label: 'Company Name', key: 'name' },
    { label: 'Industry', key: 'industry' },
    { label: 'Size', key: 'size' },
    { label: 'Website', key: 'website' },
    { label: 'Contact Email', key: 'email' },
  ];

  const fields = userType === 'candidate' ? candidateFields : userType === 'mentor' ? mentorFields : companyFields;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${THEME.primaryLight}, #fff)`,
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem 0',
      }}
    >
      {/* Floating shapes */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-60px', width: '180px', height: '180px',
        background: 'rgba(255, 192, 203,0.3)', borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite alternate',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-80px', width: '220px', height: '220px',
        background: 'rgba(144,238,144,0.3)', borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite alternate-reverse',
      }} />

      <Container>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem' }}>Register</h2>
        <p style={{ textAlign: 'center', color: THEME.muted, marginBottom: '2rem' }}>
          Select your user type and fill in your details to join CVQupid
        </p>

        {/* User Type Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          {userTypes.map(t => (
            <button
              key={t.key}
              onClick={() => setUserType(t.key as UserType)}
              style={{
                display: 'flex',
                alignItems: 'center',
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
              {t.icon}{t.label}
            </button>
          ))}
        </div>

        {/* Registration Form */}
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Card style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255,255,255,0.3)',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}>
            {fields.map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 13, color: THEME.muted }}>{f.label}</label>
                <input
                  type="text"
                  value={form[f.key] || ''}
                  onChange={e => handleChange(f.key, e.target.value)}
                  style={{
                    width: '100%',
                    padding: 12,
                    borderRadius: 12,
                    border: '1px solid rgba(0,0,0,0.1)',
                    outline: 'none',
                    transition: '0.3s',
                  }}
                />
              </div>
            ))}
            <PrimaryButton onClick={submit}>Register as {userType}</PrimaryButton>
          </Card>
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
