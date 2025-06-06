import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users/';

// https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://reqres.in/api/users', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    })
      .then(res => res.json())
      .then((json) => {
        setUsers(json.data)
      }).catch((err) => {
        console.warn(err)
        alert('Error')
      }).finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <Users isLoading={isLoading} items={users} />
      {/* <Success /> */}
    </div>
  );
}

export default App;