import { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default App