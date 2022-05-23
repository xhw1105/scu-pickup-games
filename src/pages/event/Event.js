import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Event.css';
import PlayerList from './PlayerList';
import { useDelete } from '../../hooks/useDelete';

export default function Event() {
  const { id } = useParams();
  const url = `${process.env.REACT_APP_API_URL}:8088/api/get_event/` + id;
  const delete_url = `${process.env.REACT_APP_API_URL}:8088/api/delete_event`;
  const { error, isPending, data: event } = useFetch(url);
  const history = useHistory();

  const {
    data: dataToDelete,
    isPending: deleteIsPending,
    error: deleteError,
    deleteData,
  } = useDelete(delete_url, 'DELETE');

  const handleDelete = (e) => {
    console.log({ eid: id });
    deleteData({
      eid: id,
    });

    // axios({
    //   url: 'http://184.169.246.42:8088/api/delete_event',
    //   method: 'DELETE',
    //   data: { eid: id },
    // })
    //   .then((res) => {

    //   })
    //   .catch((e) => console.log(e));
  };
  // console.log(event);

  useEffect(() => {
    if (dataToDelete) {
      history.push('/');
    }
  }, [dataToDelete]);

  return (
    <div className='event'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {event && (
        <>
          <button className='btn' onClick={handleDelete}>
            Delete Event
          </button>
          <h2 className='page-title'>{event.event_name}</h2>
          <h3>Sport: {event.sport}</h3>
          <p>Date: {event.date}</p>
          <p>Place: {event.place}</p>

          <PlayerList id={id} players={event.user_list} />
          {/* <p className='method'>{recipe.method}</p> */}
        </>
      )}
    </div>
  );
}
