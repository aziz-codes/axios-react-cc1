import React from "react";

const Users = () => {
  return (
    <div
      className="border flex flex-col justify-center items-center h-56 sm:w-64 rounded-sm
     w-full border-gray-200 shadow animate-pulse gap-2 "
    >
      <div className="flex justify-center items-center  w-32 h-32 rounded-full bg-gray-300"></div>
      <div className="w-48 h-3 bg-gray-300 rounded-lg"></div>
      <div className="h-2 bg-gray-300 rounded-lg w-32"></div>
    </div>
  );
};

export default Users;
