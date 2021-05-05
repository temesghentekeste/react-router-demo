import { Route, Link, useRouteMatch } from 'react-router-dom';

function Topic() {
  const { url, path } = useRouteMatch();
  console.log(url, path);
  return <div>TOPIC</div>;
}

export default Topic;
