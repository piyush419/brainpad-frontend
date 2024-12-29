import React from "react";
import Avatar from "@mui/material/Avatar";

const User = ({user}) => {
  return (
    <div className="p-6 bg-gray-100 absolute top-20 left-64 w-10/12 h-screen">
      <div className="flex justify-start mr-56 w-screen border-b-2">
      <div>
        <div className="flex items-center justify-center">
          {/* Avatar */}
          <Avatar
            sx={{ width: 100, height: 100 }}
            className="mb-4"
            alt={user.username}
            src="" // Use custom image URL or leave blank for default avatar
          />

         <div className="pl-10">
             {/* Username */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">UserName :  {user.username}</h1>
          
          {/* Email */}
          <p className="text-gray-600 text-sm mb-4"> Email : {user.email}</p>
         </div>

         
        </div>
      </div>
      </div>
    </div>
  );
};

export default User;
