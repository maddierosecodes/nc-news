import { Link } from 'react-router-dom';
import { ContainerContext } from './Container';
import { useEffect, useContext } from 'react';
import axios from 'axios';

const Header = ({
  setArticles,
  categories,
  latest,
  currentUser,
  setFilter,
  currentFilter
}) => {
  const { showTabs } = useContext(ContainerContext);
  useEffect(() => {
    let urlString = 'https://nc-news-maddie.herokuapp.com/api/articles';

    axios.get(urlString).then((res) => {
      setArticles(res.data.articles);
    });
  }, [currentFilter, setArticles]);

  return (
    <div className="header">
      <p>Header</p>
      <nav>
        <Link to={`/articles/1`}>Articles link</Link>
        <br></br>
        <Link to={`/profile/username`}>Profile link</Link>
        <br></br>
        <Link to={`/post`}>Post link</Link>
        <br></br>
        <Link to={`/`}>Main link</Link>
      </nav>
      <div className="container">
        <div className="container__buttonBar">
          <button
            className="container__buttonBar__tablinks tablinks--hot"
            disabled={showTabs === 'show' ? false : true}
            onClick={() => {
              return setFilter({
                sort: 'DESC',
                sortBy: 'date',
                votes: 10
              });
            }}>
            {showTabs === 'show' ? 'Hot' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--latest"
            disabled={showTabs === 'show' ? false : true}
            onClick={() => {
              setFilter({
                sort: 'DESC',
                sortBy: 'date',
                votes: 0
              });
            }}>
            {showTabs === 'show' ? 'Latest' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--popular"
            disabled={showTabs === 'show' ? false : true}
            onClick={() => {
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
            className="container__buttonBar__tablinks tablinks--top"
            disabled={showTabs === 'show' ? false : true}
            onClick={() => {
              setFilter({
                sort: 'DESC',
                sortBy: 'votes',
                votes: 0
              });
            }}>
            {showTabs === 'show' ? 'Top' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
