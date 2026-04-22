import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container py-5">
      <div className="card shadow-sm p-4" style={{ borderRadius: '15px', border: 'none' }}>
        <h1 className="mb-4" style={{ color: '#1a1a2e' }}>Privacy Policy</h1>
        <p className="text-muted">Last updated: April 2026</p>
        <hr />
        
        <section className="mb-4">
          <h3>1. Data Collection</h3>
          <p>We collect minimal data necessary to provide our services. This may include your name and email address if provided during registration.</p>
        </section>

        <section className="mb-4">
          <h3>2. How We Use Your Data</h3>
          <p>Your data is used solely for personalizing your experience within the React Grand Assignment application and is never shared with third parties.</p>
        </section>

        <section className="mb-3">
          <h3>3. Security</h3>
          <p>We implement modern security measures to protect your information and ensure a safe user experience.</p>
        </section>

        <div className="mt-4 p-3 bg-light rounded">
          <p className="mb-0 small text-secondary">If you have any questions, please contact us at support@example.com</p>
        </div>
      </div>
    </div>
  );
}
