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
    let urlString = `https://nc-news-maddie.herokuapp.com/api/articles?order=${currentFilter.sort}&sort_by=${currentFilter.sortBy}`;
    axios.get(urlString).then((res) => {
      setArticles(res.data.articles);
    });
  }, [currentFilter, setArticles]);

  return (
    <div className="header">
      <h1>NC NEWS</h1>
      <nav>
        <Link to={`/profile/test`}>Profile link</Link>
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
                sortBy: 'votes'
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
                sortBy: 'created_at'
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
                  sortBy: 'comment_count'
                };
              });
            }}>
            {showTabs === 'show' ? 'Popular' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--worst"
            disabled={showTabs === 'show' ? false : true}
            onClick={() => {
              setFilter({
                sort: 'ASC',
                sortBy: 'votes'
              });
            }}>
            {showTabs === 'show' ? 'Worst' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
