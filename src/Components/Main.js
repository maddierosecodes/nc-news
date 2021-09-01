import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = ({ articles, setCurrentArticle }) => {

  const { showTabs, switchShowTabs } = useContext(ContainerContext);

  useEffect(() => {
    if (showTabs === 'hide') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  return (
    <div className="main">
      <p>Main</p>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article">
              <Link
                onClick={setCurrentArticle(article)}
                to={`/articles/${article.article_id}`}>
                <p>{article.title}</p>
              </Link>
              <Link to={`/profile/${article.author}`}>
                <p>{article.author}</p>
              </Link>

              <p>{article.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
