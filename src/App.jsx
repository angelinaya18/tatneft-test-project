import './App.css'
import { useState, useEffect } from 'react';
import Users from './data/Users.json'
import UserTypes from './data/UserTypes.json'
import UsersList from './components/UsersList/UsersList'
import Filter from './components/Filter/Filter'

export default function App() {
  const [userItems, setuserItems] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterUsers, setFilterUsers] = useState([]);

  function getTypeName(type_id){
    let find_type=userTypes.find(i=>i.id==type_id);
    return find_type ? find_type.name : '';
  }

  function filterUsersFromList(){
    let filterResult=userItems.filter(i=>(i.name+i.login+getTypeName(i.type_id)+i.last_visit_data).toUpperCase().includes(filter.toUpperCase()));
    return filterResult;
  }

  function onInputFilter(value){
    setFilter(value);
    if(value.length==0){
      setFilterUsers(Users);
    }
  }

  async function searchUsers(){
    let new_list=await filterUsersFromList();
    setFilterUsers(new_list);
  }

  useEffect(() => {
    setuserItems(Users);
    setUserTypes(UserTypes);
    setFilterUsers(Users);
  }, []);

  return (
    <>
      <Filter filter={filter}
      onChange={(value)=>onInputFilter(value)}
      onClickFind={()=>{
        searchUsers()
      }}/>
      <UsersList users={filterUsers} types={userTypes}/>
    </>
  )
}
