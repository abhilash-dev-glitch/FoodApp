import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('1'); // Default selected user
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('userId', userId);   // Save login info
    navigate('/');                            // Redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🔐 Login</h1>

        <label htmlFor="userId" className="block text-gray-700 font-medium mb-2 text-left">
          Select User:
        </label>

        <select
          id="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="1">User 1 (Alice)</option>
          <option value="2">User 2 (Bob)</option>
          <option value="3">User 3 (Charlie)</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
