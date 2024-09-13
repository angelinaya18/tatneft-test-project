import './App.css'
import { useState, useEffect } from 'react';
import Users from './data/Users.json'
import UsersList from './components/UsersList/UsersList'

export default function App() {
  const [userItems, setuserItems] = useState([]);

  useEffect(() => {
    setuserItems(Users);
  }, []);

  return (
    <>
      <UsersList users={userItems}/>
    </>
  )
}
