import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users/';

// https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then((json) => {
        setUsers(json.data)
      })
  })

  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;