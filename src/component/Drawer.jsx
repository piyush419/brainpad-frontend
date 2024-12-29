import * as React from 'react';
import { NavLink } from 'react-router-dom';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function PermanentDrawerLeft() {
  return (
    <div className="flex h-screen">
      {/* Sidebar / Drawer */}
      <div className="w-64 bg-blue-800 text-white flex flex-col p-4">
        {/* Drawer Content */}
        <div className="mt-8 flex flex-col">
          <ul className="space-y-4">
          <li className="flex items-center space-x-4">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-4 text-blue-500"
                    : "flex items-center space-x-4"
                }
              >
                <span className="text-lg"><PersonIcon style={{ fontSize: 40, color: "white" }} /></span>
                <span className='font-bold font-mono'>My Profile</span>
              </NavLink>
            </li>

            <li className="flex items-center space-x-4">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-4 text-blue-500"
                    : "flex items-center space-x-4"
                }
              >
                <span className="text-lg"><StickyNote2Icon style={{ fontSize: 40, color: 'white' }} /></span>
                <span className='font-bold font-mono'>My Notes</span>
              </NavLink>
            </li>

            
              <li className="flex items-center space-x-4">
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-4 text-blue-500"
                    : "flex items-center space-x-4"
                }
              >
                <span className="text-lg">
              
              
                <FavoriteIcon color="error" fontSize="large" />

        
                </span>
                <span className='font-mono'> My Favourites</span>
                </NavLink>
              </li>
              

            
            
          </ul>
        </div>
      </div>
     
    </div>
  );
}
