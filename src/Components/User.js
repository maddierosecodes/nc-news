import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('none');

  const switchCurrentUser = (username) => {
    setCurrentUser((currUser) => (currUser === 'none' ? username : 'none'));
  };

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, switchCurrentUser }}>
      <div className="userArea">
        {children}
      </div>
    </UserContext.Provider>
  );
};
