"use client";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !username || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log({ email, username, password });

    window.location.href = '/welcome';
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Your Account</h1>

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
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 text-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 text-lg"
              placeholder="Choose a username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 text-lg"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 text-lg"
              placeholder="Confirm your password"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-5 py-4 bg-purple-500 text-white font-bold text-lg rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
            >
              Sign Up
            </button>
          </div>

          <p className="text-lg text-gray-600 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-500 hover:text-purple-600 transition duration-300">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
