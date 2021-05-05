import { Route, Link, useRouteMatch } from 'react-router-dom';
import topics from './data';
import Topic from './Topic';

const App =  () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
      {/* <Route>
        <Topic path="/concepts" />
      </Route> */}
    </div>
  );
};

export default App;
