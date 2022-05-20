import { Link } from 'react-router-dom';

// styles
import './EventList.css';

export default function EventList({ events }) {
  console.log(events);
  return (
    // <div>List</div>
    <div className='recipe-list'>
      {events.map((event) => (
        <div key={event.eid} className='card'>
          <h3>{event.event_name}</h3>
          <p>Date: {event.date}</p>
          <p>Place: {event.place}</p>
          <div>Sport: {event.sport}</div>
          <Link to={`/events/${event.eid}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}
