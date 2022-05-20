import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [sport, setSport] = useState('');
  const [playerName, setPlayerName] = useState('');
  const history = useHistory();
  // const [ingredients, setIngredients] = useState([]);
  // const ingredientInput = useRef(null);

  const { postData, data, error } = useFetch(
    `${process.env.REACT_APP_API_URL}:8088/api/new_event`,
    'POST'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      event_name: title,
      place,
      date,
      sport,
      user_name: playerName,
    });
  };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   const ing = newIngredient.trim();

  //   if (ing && !ingredients.includes(ing)) {
  //     setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  //   }
  //   setNewIngredient('');
  //   ingredientInput.current.focus();
  // };

  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data]);

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event Name:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Sport:</span>
          <input
            type='text'
            onChange={(e) => setSport(e.target.value)}
            value={sport}
            required
          />
        </label>

        {/* <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>
              add
            </button>
          </div>
        </label> */}
        {/* <p>
          Current ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p> */}

        <label>
          <span>Place:</span>
          <input
            type='text'
            onChange={(e) => setPlace(e.target.value)}
            value={place}
            required
          />
        </label>

        <label>
          <span>Date:</span>
          <input
            type='text'
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>

        <label>
          <span>Player name:</span>
          <input
            type='text'
            onChange={(e) => setPlayerName(e.target.value)}
            value={playerName}
            required
          />
        </label>

        <button className='btn'>submit</button>
      </form>
    </div>
  );
}
