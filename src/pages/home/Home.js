import { useFetch } from '../../hooks/useFetch';
import EventList from '../../components/EventList';

// styles
import './Home.css';

export default function Home() {
  console.log(process.env.REACT_APP_API_URL);
  // const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
  // const { data, isPending, error } = useFetch(
  //   'http://184.169.246.42:8088/api/get_event/6'
  // );
  // const { data, isPending, error } = useFetch(
  //   'http://184.169.246.42:8088/api/list_all'
  // );
  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_API_URL}:8088/api/list_all`
  );

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <EventList events={data} />}
    </div>
  );
}
