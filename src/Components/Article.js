import { ContainerContext } from './Container';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

const Article = ({ currentArticle }) => {
  const { article } = useParams();

  const { showTabs, switchShowTabs } = useContext(ContainerContext);
  const [viewArticle, setViewArticle] = useState({});
  useEffect(() => {
    axios
      .get(`https://nc-news-maddie.herokuapp.com/api/articles/${article}`)
      .then((res) => {
        console.log(res.data);
        setViewArticle(res.data.article[0]);
      });
  }, [article]);

  useEffect(() => {
    if (showTabs === 'show') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);
  return (
    <div className="article">
      <h2>{viewArticle.title}</h2>
      <h3>written by {viewArticle.author}</h3>
      <p>{viewArticle.body}</p>
    </div>
  );
};

export default Article;
