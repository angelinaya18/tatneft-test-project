import './App.css'
import { useState, useEffect } from 'react';
import Users from './data/Users.json'
import UserTypes from './data/UserTypes.json'
import UsersList from './components/UsersList/UsersList'

export default function App() {
  const [userItems, setuserItems] = useState([]);
  const [userTypes, setUserTypes] = useState([]);

  useEffect(() => {
    setuserItems(Users);
    setUserTypes(UserTypes);
  }, []);

  return (
    <>
      <UsersList users={userItems} types={userTypes}/>
    </>
  )
}
