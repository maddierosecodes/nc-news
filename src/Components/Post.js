import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';

const Post = () => {
  const { showTabs, switchShowTabs } = useContext(ContainerContext);
  useEffect(() => {
    if (showTabs === 'show') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  return (
    <div className="post">
      <p>Post</p>
    </div>
  );
};

export default Post;
