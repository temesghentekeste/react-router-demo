import { useParams } from 'react-router-dom'
import topics from './data'
function Resource() {
  const { topicId, subId } = useParams();

  const topic = topics
    .find(({ id }) => id === topicId)
    .resources.find(({ id }) => id === subId);

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  );
}

export default Resource;