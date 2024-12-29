import React, { useEffect, useState } from "react";
import PermanentDrawerLeft from "../component/Drawer";
import Notes from "../component/Notes";
import axios from "axios";
import { toast } from "react-toastify";

const Favourite = () => {
  const [notes, setnotes] = useState();

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/notes/favourite",{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      if(response.status === 200) {
         setnotes(response.data.notes)
      }
      else toast.error(response.data.message)
    } catch (e) {
      console.log("error fetching favourite..", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PermanentDrawerLeft />
      <Notes title="Favourites" notes={notes} />
    </div>
  );
};

export default Favourite;
