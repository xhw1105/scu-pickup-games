import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

import './PlayerList.css';

export default function PlayerList({ id, players }) {
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

  const handleDelete = (user) => {
    setAllPlayers((prevAllPlayers) => prevAllPlayers.filter((p) => p != user));
    axios({
      url: 'http://184.169.246.42:8088/api/delete_user',
      method: 'DELETE',
      data: { user_name: user, eid: id },
    })
      .then((res) => {})
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setAllPlayers(players);
    // if (data) {
    //   setNewPlayer('');
    // }
  }, []);

  return (
    <div className='container'>
      <div className='content'>
        <p>Participants:</p>
        <ul className='players'>
          {allPlayers.map((user) => (
            <li key={user}>
              <p className='name'>{user}</p>
              <button onClick={() => handleDelete(user)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar'>
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
    </div>
  );
}
