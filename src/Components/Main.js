import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = ({ articles }) => {
  const { showTabs, switchShowTabs } = useContext(ContainerContext);
  useEffect(() => {
    if (showTabs === 'hide') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  return (
    <div className="main">
      <p>Main</p>
      <ul>
        {articles.map(({ author, title, votes, article_id }) => {
          return (
            <li key={article_id} className="article">
              <Link to={`/articles/${article_id}`}>
                <p>{title}</p>
              </Link>
              <Link to={`/profile/${author}`}>
                <p>{author}</p>
              </Link>

              <p>{votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
