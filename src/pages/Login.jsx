import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('1');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('userId', userId);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">🔐 Login</h1>
        <label htmlFor="userId" className="block mb-2">Select User ID:</label>
        <select
          id="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-4"
        >
          <option value="1">User 1 (Alice)</option>
          <option value="2">User 2 (Bob)</option>
          <option value="3">User 3 (Charlie)</option>
        </select>
        <button onClick={handleLogin} className="bg-black text-white px-6 py-2 rounded">Login</button>
      </div>
    </div>
  );
}

export default Login;
