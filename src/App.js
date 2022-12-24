import { getUsers } from "./services/index";
import { useState, useEffect } from "react";
// import Users from "./skeleton/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);
  const fetchUsers = () => {
    // setLoaded(true);
    getUsers().then((res) => {
      setUsers(res.data.data);
    });
    setLoaded(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);
  //test commit
  return (
    <div className="w-full flex flex-row flex-wrap px-4 py-4 gap-4">
      {loaded
        ? users.map((user, index) => (
            <div
              className="border flex flex-col gap-4 justify-center items-center h-56 sm:w-64 rounded-sm w-full "
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
          ))
        :  <div className="flex w-full flex-col items-center justify-center">
          {online ? "": <h3 className="text-xl font-bold">Oops seems like you are not connected <span>But this is not your fault</span></h3>}
          </div>}
     
    </div>
  );
};

export default App;
