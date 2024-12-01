import { useEffect, useState } from "react";
import { getAllUsers } from "./api/users/getAllUsers";

const App = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  return (
    <>
      Hello G! Here is Luffy coming strong! :D
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
