import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './User';

const UserProfile = ({ articles, currentFilter }) => {
  const { username } = useParams();
  const [userArticles, setUserArticles] = useState([]);
  const { currentUser } = useContext(UserContext);

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
                  to={`/articles/${article_id}`}>
                  <p>{title}</p>
                </Link>
                <Link to={`/profile/${author}`}>
                  <p>{author}</p>
                </Link>
                {() => {
                  if (username === currentUser.username) {
                    return (
                      <div>
                        <button>Edit</button>
                        <p>{votes}</p>
                        <button>Delete</button>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <button>Edit</button>
                        <p>{votes}</p>
                        <button>Delete</button>
                      </div>
                    );
                  }
                }}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserProfile;
