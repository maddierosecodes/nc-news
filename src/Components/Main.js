import { ContainerContext } from './Container';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = ({ articles, setCurrentArticle, setArticles }) => {
  const { showTabs, switchShowTabs } = useContext(ContainerContext);
  const [vote, setVote] = useState({});

  useEffect(() => {
    axios
      .patch(
        `https://nc-news-maddie.herokuapp.com/api/articles/${vote.article_id}`,
        { inc_votes: vote.votes }
      )
      .then(() => {
        setArticles((currentArticles) => {
          let newArticles = [];
          currentArticles.forEach((article) => {
            if (article.article_id === vote.article_id) {
              article.votes += vote.votes;
            }
            newArticles.push(article);
          });
          return newArticles;
        });
      });
  }, [setArticles, vote]);

  useEffect(() => {
    if (showTabs === 'hide') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  return (
    <div className="main">
      <p>Main</p>
      <ul className="main__article__list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="main__article_item">
              <div className="main__article__box">
                <Link
                  onClick={setCurrentArticle(article)}
                  to={`/articles/${article.article_id}`}>
                  <p>{article.title}</p>{' '}
                </Link>
                <Link to={`/profile/${article.author}`}>
                  <p>{article.author}</p>
                </Link>
                <button
                  onClick={() => {
                    setVote({ article_id: article.article_id, votes: 1 });
                  }}>
                  UP
                </button>
                <p>{article.votes}</p>
                <button
                  onClick={() => {
                    setVote({ article_id: article.article_id, votes: -1 });
                  }}>
                  DOWN
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
