import { createContext, useState } from 'react';

export const ContainerContext = createContext();

export const ContainerProvider = ({ children, setFilter }) => {
  const [showTabs, setShowTabs] = useState('show');

  const switchShowTabs = () => {
    setShowTabs((currTabs) => (currTabs === 'show' ? 'hide' : 'show'));
  };

  return (
    <ContainerContext.Provider
      value={{ showTabs, setShowTabs, switchShowTabs }}>
      <div className="container">
        <div className="container__buttonBar">
          <button
            className="container__buttonBar__tablinks tablinks--hot"
            disabled={showTabs === 'show' ? false : true}
            onclick={() => {
              setFilter(() => {
                return {
                  sort: 'DESC',
                  sortBy: 'date',
                  votes: 10
                };
              });
            }}>
            {showTabs === 'show' ? 'Hot' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--hot"
            disabled={showTabs === 'show' ? false : true}
            onclick={() => {
              setFilter(() => {
                return {
                  sort: 'DESC',
                  sortBy: 'date',
                  votes: 0
                };
              });
            }}>
            {showTabs === 'show' ? 'Latest' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--hot"
            disabled={showTabs === 'show' ? false : true}
            onclick={() => {
              setFilter(() => {
                return {
                  sort: 'DESC',
                  sortBy: 'comments',
                  votes: 0
                };
              });
            }}>
            {showTabs === 'show' ? 'Popular' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--hot"
            disabled={showTabs === 'show' ? false : true}
            onclick={() => {
              setFilter(() => {
                return {
                  sort: 'DESC',
                  sortBy: 'votes',
                  votes: 0
                };
              });
            }}>
            {showTabs === 'show' ? 'Top' : ''}
          </button>
        </div>
        <div className="container__content">{children}</div>
      </div>
    </ContainerContext.Provider>
  );
};
