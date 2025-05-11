'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './signup.css';
import { fetchAPI } from '@/utils/api';

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!username || !password || !confirm) {
      setError('All fields are required');
      return;
    }

    if (username.length < 4) {
      setError('Username must be at least 4 characters');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetchAPI('/api/users/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response;

      if (data.success) {
        router.push('/auth/login?signup=success');
      } else {
        setError(data.message || 'Signup failed unexpectedly.');
      }

      if (!response.ok) {
        const serverError = data?.error || data?.detail || 'Signup failed. Please try again.';
        setError(serverError);
        return;
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Could not connect to the server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Sign Up</h1>
          <p>Create your SoftEn Lunar account</p>
        </div>
        
        <form onSubmit={handleSignup} className="auth-options">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
            minLength={4}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
            minLength={8}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
            minLength={8}
          />
          
          {error && (
            <div className="text-red-500 text-sm py-2 px-3 bg-red-50 rounded">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="auth-btn primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-footer mt-4">
          <p>
            Already have an account?{' '}
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}