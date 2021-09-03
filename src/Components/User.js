import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    username: 'none',
    avatar_url: 'none',
    name: 'none'
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="userArea">{children}</div>
    </UserContext.Provider>
  );
};
