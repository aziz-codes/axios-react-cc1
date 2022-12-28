import { getUsers } from "./services/index";
import { useState, useEffect } from "react";


const App = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0)
const [loading, setloading] = useState(false);
  const fetchUsers = () => {
    setloading(true);
    getUsers().then((res) => {
      const {data} = res.data;
       setUsers(data);
       console.log(data)
    });
   setloading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let usersLength = users.length-1;
  
  const handleNext = () =>{
   setIndex((currentIndex)=>currentIndex+1);
   if(index===usersLength){
    setIndex(0);
   }
  }

  const handlePrevious = () =>{
    setIndex((currentIndex)=>currentIndex-1);
   }
//  console.log(users[0].id);


  return (
  <div className="flex  w-full justify-center items-center  ">
    {/* <img src={users[0].image}/> */}
   {loading ? "Loading" :  <div className="flex flex-col rounded-md justify-center items-center border mt-5 h-56 w-56">
      <img src={users[index]?.avatar} className="h-20 w-20 rounded-full border p-2 " alt="profile"/>
      <h4>{users[index]?.id}</h4>
      <div className="flex flex-row gap-3 mt-3">
        <button className="rounded-sm p-1 text-white bg-sky-500" onClick={handleNext}>Next</button>
        <button className="rounded-sm p-1 text-white bg-sky-500" onClick={handlePrevious}>Previous</button>
      </div>
    </div>}
  </div>
  );
};

export default App;
// test commit