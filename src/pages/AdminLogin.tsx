import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'dagg22329999') {
      navigate('/admin-dashboard');
    } else {
      setError('パスワードが正しくありません。もう一度お試しください。');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">管理者ログイン</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <Lock size={48} className="text-blue-600" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">パスワード:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button type="submit" className="w-full btn btn-primary">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;