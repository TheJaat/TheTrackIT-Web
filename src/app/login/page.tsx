'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { login } from '@/lib/auth-api';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  async function handleLogin(
    e: React.FormEvent,
  ) {
    e.preventDefault();

    const result =
      await login(
        email,
        password,
      );

      console.log(result);

    localStorage.setItem(
      'token',
      result.access_token,
    );

    router.push('/dashboard');
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-96 space-y-4"
      >
        <input
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value,
            )
          }
          placeholder="Email"
          className="w-full border p-2"
        />

        <input
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value,
            )
          }
          placeholder="Password"
          type="password"
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="w-full border p-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}