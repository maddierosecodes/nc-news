import { ContainerContext } from './Container';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserProfile = ({ articles, setCurrentArticle, currentFilter }) => {
  const { username } = useParams();
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    let urlString = `https://nc-news-maddie.herokuapp.com/api/users/articles/${username}?order=${currentFilter.sort}&sort_by=${currentFilter.sortBy}`;
    axios.get(urlString).then((res) => {
      setUserArticles(res.data.articles.articles);
    });
  }, [username, currentFilter]);

  return (
    <div className="myProfile">
      <h2 className="myProfile__title">{username}</h2>
      <ul className="main__article__list">
        {userArticles.map(({ author, title, votes, article_id }) => {
          return (
            <li key={article_id} className="myProfile__article">
              <div className="main__article__box">
                <Link
                  onClick={setCurrentArticle(articles.article_id)}
                  to={`/articles/${article_id}`}>
                  <p>{title}</p>
                </Link>
                <Link to={`/profile/${author}`}>
                  <p>{author}</p>
                </Link>
                <p>{votes}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserProfile;
