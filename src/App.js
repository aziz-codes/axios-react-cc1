import { getUsers } from "./services/index";
import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    getUsers().then((res) => {
      setUsers(res.data.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  //test commit
  return (
    <div className="w-full grid md:grid-cols-4 gap-3 sm:px-2 my-3 grid-cols-1 sm:grid-cols-2 p-0">
      {users.map((user, index) => (
        <div
          className="border flex flex-col justify-center items-center h-56 sm:w-64 rounded-sm w-full"
          key={index}
        >
          <img
            src={user.avatar}
            className="w-32 h-32 rounded-full"
            alt={user.first_name}
          />
          <h4>
            {user.first_name} {user.last_name}
          </h4>
          <span className="text-xs text-gray-400">{user.email}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
