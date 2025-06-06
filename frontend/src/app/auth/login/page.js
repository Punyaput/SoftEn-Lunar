'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';
import { fetchAPI } from '@/utils/api';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const { access, refresh } = await fetchAPI(`/api/token/`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      // Store tokens
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      // Trigger storage event to update other tabs
      window.dispatchEvent(new Event('storage'));

      router.push('/account/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Log In</h1>
          <p>Access your SoftEn Lunar account</p>
        </div>
        <form onSubmit={handleLogin} className="auth-options">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="auth-btn primary">
            Log In
          </button>
        </form>
        <div className="auth-footer mt-4">
          <p>
            Don’t have an account?{' '}
            <a href="/auth/signup">Sign up</a>
          </p>
        </div>
      </div>
    </main>
  );
}
