import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PermanentDrawerLeft from "../component/Drawer";
import Notes from "../component/Notes";
import PaginatedComponent from "../component/Pagination";

const Home = () => {
  const navigate = useNavigate();
  const [notes, setnotes] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)
  const limit =4
  async function fetchNotes(currentPage) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5000/notes", {
        params:{
          page: currentPage,
          limit : limit
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Notes fetched successfully:");
        
      setnotes(response.data.notes);
      setTotalPage(Math.ceil(response.data.total / limit));
      }
    } catch (error) {
      // Check if error.response exists
      if (error.response && error.response.status === 401) {
        // Redirect to login page if unauthorized
        navigate("/?sign-in=true");
      } else {
        console.error("Error fetching notes:", error.message);
      }
    }
  }

  useEffect(() => {
    fetchNotes(page);
  }, [page]);

  function handlePage(event,value){
     setpage(value)
  }

  return (
    <div>
      <PermanentDrawerLeft/>
      <Notes  title ="My Notes" notes={notes}/>
      <PaginatedComponent count={totalPage} page={page} onPageChange={handlePage}/>
    </div>
  );
};

export default Home;
