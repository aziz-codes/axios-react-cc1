import { getUsers } from "./services/index";
import { useState, useEffect } from "react";


const App = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0)

  const fetchUsers = () => {
    getUsers().then((res) => {
      const {data} = res.data;
       setUsers(data);
       console.log(data)
    });
   
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  const handleNext = () =>{
   
  }

 


  return (
  <div className="flex  w-full justify-center items-center  ">
    {/* <img src={users[0].image}/> */}
    <div className="flex flex-col rounded-md justify-center items-center border mt-5 h-56 w-56">
      {/* <img src={users[index].avatar} className="h-20 w-20 rounded-full border p-2 " alt="profile"/> */}
      {/* <h4>{users[0].first_name}</h4> */}
      <div className="flex flex-row gap-3 mt-3">
        <button className="rounded-sm p-1 text-white bg-sky-500" onClick={handleNext}>Next</button>
        <button className="rounded-sm p-1 text-white bg-sky-500">Previous</button>
      </div>
    </div>
  </div>
  );
};

export default App;
// test commit