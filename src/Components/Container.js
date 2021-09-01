import { createContext, useState } from 'react';

export const ContainerContext = createContext();

export const ContainerProvider = ({ children }) => {
  const [showTabs, setShowTabs] = useState('show');

  const switchShowTabs = (currTabs) => {
    setShowTabs((currTabs) => (currTabs === 'show' ? 'hide' : 'show'));
  };

  return (
    <ContainerContext.Provider
      value={{ showTabs, setShowTabs, switchShowTabs }}>
      <div className="container">
        <div className="container__display">{children}</div>
      </div>
    </ContainerContext.Provider>
  );
};
