"use client";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    if (email === 'admin@example.com' && password === 'password123') {
      window.location.href = '/dashboard';
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-6 text-center text-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 text-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 text-lg"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-5 py-4 bg-indigo-500 text-white font-bold text-lg rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
            >
              Login
            </button>
          </div>

          <p className="text-lg text-gray-600 text-center">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-indigo-500 hover:text-indigo-600 transition duration-300">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
