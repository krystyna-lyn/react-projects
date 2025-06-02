import React from 'react';
import './index.scss';
import Users from './components/Users';

// https://reqres.in/api/users

function App() {
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;