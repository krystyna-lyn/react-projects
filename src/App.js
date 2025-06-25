import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users/';
import { Success } from './components/Success.jsx'

// https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  //console.log(invites)

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

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id != id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const onClickSuccess = () => {
    setSuccess(true);
  }

  return (
    <div className="App">
      {success ? (<Success count={invites.length} />) :
        (
          <Users
            search={search}
            onchangeSearchValue={onchangeSearchValue}
            onClickSuccess={onClickSuccess}
            isLoading={isLoading}
            items={users}
            invites={invites}
            onClickInvite={onClickInvite}
          />
        )
      }


    </div>
  );
}

export default App;