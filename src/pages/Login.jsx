import React, { useState } from "react";

const Login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>

          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setname(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setpassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Login;