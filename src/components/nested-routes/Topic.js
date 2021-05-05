import {
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Resource from './Resource';
import topics from './data';

function Topic() {
  const { topicId } = useParams();
  const { url, path } = useRouteMatch();

  const topic = topics.find(({ id }) => id === topicId);

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:subId`}>
        <Resource />
      </Route>
    </div>
  );
}

export default Topic;
