import { Route, Link } from 'react-router-dom';
import topics from './data';
import Topic from './Topic';

const App =  () => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`/topics/:topicId`}>
        <Topic />
      </Route>
    </div>
  );
};

export default App;
