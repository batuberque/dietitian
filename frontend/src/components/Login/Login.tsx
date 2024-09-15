import React, { useCallback } from 'react';
import { useLoginUser } from '../../services/queries';
import useStore from '../../store/useStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { username, password, setUsername, setPassword } = useStore();
  const loginMutation = useLoginUser();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      loginMutation.mutate(
        { username, password },
        {
          onSuccess: (data) => {
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('role', 'editor');
            // console.log('Giriş başarılı');
            alert('GİRİŞ BAŞARILI');
            navigate('/admin');
          },
          onError: (error) => {
            console.error('Giriş başarısız', error);
            alert('GİRİŞ BAŞARISIZ');
          },
        }
      );
    },
    [loginMutation, navigate, password, username]
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-checks-pattern">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Kullanıcı Adı
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Şifre
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-500 text-white rounded-md hover:bg-gray-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
