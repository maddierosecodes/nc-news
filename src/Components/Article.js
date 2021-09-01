import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';

const Article = () => {
  const { showTabs, switchShowTabs } = useContext(ContainerContext);
  useEffect(() => {
    if (showTabs === 'show') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);
  return (
    <div className="article">
      <p>Article</p>
    </div>
  );
};

export default Article;
