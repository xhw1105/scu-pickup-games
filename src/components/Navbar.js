import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>SCU Pickup Games</h1>
        </Link>
        <Link to='/create'>Create New Event</Link>
      </nav>
    </div>
  );
}
