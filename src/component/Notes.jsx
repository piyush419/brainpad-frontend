import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Notes = ({ title, notes = [] }) => {
  const [currentNotes, setCurrentNotes] = useState(notes);
  const [originalNotes , setOriginalNotes] = useState(notes);
  const [isFavourite, setFav] = useState({});

  // Update DB for favourite status
  async function updateDb(id, isFavorited) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/notes/favourite`,
        { notesId: id, isFav: isFavorited },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) toast.success(response.data.message);
      else toast.error(response.data.message);
    } catch (e) {
      console.log("Error", e);
      toast.error(e.message);
    }
  }

  // Handle delete function
  async function handleDelete(id) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5000/notes/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Note deleted successfully");
        setCurrentNotes(currentNotes.filter((element) => element._id !== id));
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      console.log("Error while deleting:", e);
      toast.error(e.message);
    }
  }

  // Initialize favourite state
  useEffect(() => {
    const fav = {};
    notes.forEach((element) => {
      fav[element._id] = element.isFav || false; // Default value from backend
    });
    setFav(fav); // Update favourite state
    setOriginalNotes(notes)
    setCurrentNotes(notes); // Update notes
  }, [notes]);


  function handleChange(e){
     let title = e.target.value
     if(title=="") setCurrentNotes(originalNotes)
    else{
      let searchNotes = currentNotes.filter((element)=>{
        return   element.title.toLowerCase().includes(title.toLowerCase());
  })
  setCurrentNotes(searchNotes)
    }
  }

  return (
    <div className="p-6 bg-gray-100 absolute top-20 left-64 w-10/12 h-screen">
      <div className="flex justify-start items-start">
      <h1 className="text-2xl font-bold pb-5">{title}</h1>
      <input placeholder="title" onChange={handleChange} type="text" name="" id="" className="border-b-2 border-gray-500 p-2 focus:border-blue-500 focus:outline-none ml-10" />
      </div>
      {
        currentNotes.length ===0 ?
        <h1>No Notes Avaiable</h1>:
        currentNotes.map((element) => (
          <div
            key={element.id || element._id}
            className="p-4 bg-white shadow-md rounded-md my-2 mb-7"
          >
            <h2 className="text-xl font-semibold">{element.title}</h2>
            <p className="text-gray-700">{element.content}</p>
            <div className="flex justify-between">
            
              {title === "My Notes" && <Button
                onClick={() => {
                  const newFav = { ...isFavourite }; // Create a copy
                  newFav[element._id] = !isFavourite[element._id]; // Toggle the favorite state
                  setFav(newFav); // Update state
                  updateDb(element._id, newFav[element._id]); // Update in database
                }}
                variant="contained"
              >
                {isFavourite[element._id] ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon color="error" />
                )}
                <span className="inline-block ml-2">Add to favourite</span>
              </Button>}
  
        
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(element._id)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      
    </div>
  );
};

export default Notes;
