import React, { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;