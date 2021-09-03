import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    username: 'none',
    avatar_url: 'none',
    name: 'none'
  });

  const switchCurrentUser = (user) => {
    setCurrentUser((currUser) =>
      currUser.username === 'none'
        ? user
        : {
            username: 'none',
            avatar_url: 'none',
            name: 'none'
          }
    );
  };
  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, switchCurrentUser }}>
      <div className="userArea">{children}</div>
    </UserContext.Provider>
  );
};
