import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types'
import UserContext from '../context/UserContext';

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('userToken');
    if (storedUsername) setUsername(storedUsername);
    if (storedToken) setToken(storedToken);
  }, []);

  const value = useMemo(() => ({ username, setUsername, token, setToken }), [username, token]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired
}