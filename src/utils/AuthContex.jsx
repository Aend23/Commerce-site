import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [id, setID] = useState(localStorage.getItem('id') || '');

  
  const login = (newToken,newId) => {
    setToken(newToken);
    setID(newId);
    localStorage.setItem('token', newToken);
    localStorage.setItem("id",newId);
  };

  const logout = () => {
    setToken('');
    setID('');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
