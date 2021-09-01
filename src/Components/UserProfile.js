import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserProfile = ({ articles, setCurrentArticle }) => {
  const { username } = useParams();
  const userArticles = articles.filter((article) => {
    return article.author === username;
  });

  return (
    <div className="myProfile">
      <p>My Profile</p>
      <ul>
        {userArticles.map(({ author, title, votes, article_id }) => {
          return (
            <li key={article_id} className="article">
              <Link
                onClick={setCurrentArticle(articles.article_id)}
                to={`/articles/${article_id}`}>
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

export default UserProfile;
