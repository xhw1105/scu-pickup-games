import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Event.css';

export default function Event() {
  const { id } = useParams();
  const url = `${process.env.REACT_APP_API_URL}:8088/api/get_event/` + id;
  const { error, isPending, data: event } = useFetch(url);

  console.log(event);

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {event && (
        <>
          <h2 className='page-title'>{event.event_name}</h2>
          <h3>Sport: {event.sport}</h3>
          <p>Date: {event.date}</p>
          <p>Place: {event.place}</p>
          <p>Participants:</p>
          <ul>
            {event.user_list.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
          {/* <p className='method'>{recipe.method}</p> */}
        </>
      )}
    </div>
  );
}
