import { Link } from 'react-router-dom';
import { ContainerContext } from './Container';
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';

const Header = ({
  setArticles,
  categories,
  latest,
  currentUser,
  setFilter,
  currentFilter,
  setBgColour
}) => {
  const { showTabs } = useContext(ContainerContext);
  useEffect(() => {
    let urlString = `https://nc-news-maddie.herokuapp.com/api/articles?order=${currentFilter.sort}&sort_by=${currentFilter.sortBy}`;
    axios.get(urlString).then((res) => {
      setArticles(res.data.articles);
    });
  }, [currentFilter, setArticles]);

  const [button, setButton] = useState('tablinks--hot');

  return (
    <div className="header">
      <Link
        onClick={() => {
          setBgColour('#C2D3D6');
          setFilter({
            sort: 'DESC',
            sortBy: 'votes'
          });
        }}
        to={`/`}>
        <h1>NC NEWS</h1>
      </Link>

      <nav>
        <Link
          to={`/profile/test`}
          onClick={() => {
            setBgColour('#C2D3D6');
            setFilter({
              sort: 'DESC',
              sortBy: 'votes'
            });
          }}>
          Profile link/Sign In
        </Link>
        <br></br>
        <Link
          onClick={() => {
            setBgColour('#C2D3D6');
            setFilter({
              sort: 'DESC',
              sortBy: 'votes'
            });
          }}
          to={`/post`}>
          Post link
        </Link>
        <br></br>
      </nav>
      <div className="container">
        <div className="container__buttonBar">
          <button
            className="container__buttonBar__tablinks tablinks--hot"
            disabled={showTabs === 'show' ? false : true}
            title="Sort by: most likes"
            onClick={() => {
              setBgColour('#C2D3D6');
              setFilter({
                sort: 'DESC',
                sortBy: 'votes'
              });
            }}>
            {showTabs === 'show' ? 'Hot' : ''}
          </button>
          <button
            className="container__buttonBar__tablinks tablinks--latest"
            disabled={showTabs === 'show' ? false : true}
            title="Sort by: most recent"
            onClick={() => {
              setBgColour('#D6D1C2');
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
            title="Sort by: most comments"
            onClick={() => {
              setBgColour('#C2D6C9');
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
            title="Sort by: least likes"
            onClick={() => {
              setBgColour('#D6C8DD');
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
