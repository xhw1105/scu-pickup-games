import React from 'react';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

export default function Players({ id, players }) {
  const [newPlayer, setNewPlayer] = useState('');
  const [allPlayers, setAllPlayers] = useState([]);

  const { postData, data, error, isPending } = useFetch(
    `${process.env.REACT_APP_API_URL}:8088/api/add_user`,
    'POST'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({
    //   user_name: newPlayer,
    //   eid: id,
    // });
    const p = newPlayer.trim();
    if (p && !allPlayers.includes(p)) {
      setAllPlayers((prevAllPlayers) => [...prevAllPlayers, newPlayer]);
      postData({
        user_name: newPlayer,
        eid: id,
      });
      setNewPlayer('');
    }
  };

  useEffect(() => {
    setAllPlayers(players);
    // if (data) {
    //   setNewPlayer('');
    // }
  }, []);

  return (
    <div>
      <p>Participants:</p>
      <ul>
        {allPlayers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Add new player:</span>
          <input
            type='text'
            onChange={(e) => setNewPlayer(e.target.value)}
            value={newPlayer}
            required
          />
        </label>
        <button className='btn'>Add Player</button>
      </form>
    </div>
  );
}
