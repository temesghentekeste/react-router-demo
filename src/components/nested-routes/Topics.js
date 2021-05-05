import { Link } from 'react-router-dom';
import topics from './data';

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
    </div>
  );
};

export default App;
