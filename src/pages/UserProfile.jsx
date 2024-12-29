import React, { useEffect, useState } from 'react'
import User from '../component/User';
import PermanentDrawerLeft from '../component/Drawer';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserProfile = () => {
    const [user,setUser] = useState({})
     async function fetchUser(){

        try{
             const token = localStorage.getItem('token')
             const response = await axios.get('http://localhost:5000/user/profile',{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
             })
             if(response.status===200) {
                console.log(response.data)
                 setUser(response.data.user)
             }
             else toast.error(response.data.message)
        }catch(e){
           console.log("error fetching user..." , e)
        }
     }

    useEffect(()=>{
        fetchUser()
    },[])
    return (
        <div>
          <PermanentDrawerLeft/>
          <User user={user}/>
        </div>
      );
}

export default UserProfile