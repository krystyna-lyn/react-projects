import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users/';
import { use } from 'react';

// https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('');

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

  const onchangeSearchValue = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <Users
        search={search}
        onchangeSearchValue={onchangeSearchValue}
        isLoading={isLoading}
        items={users} />
      {/* <Success /> */}
    </div>
  );
}

export default App;