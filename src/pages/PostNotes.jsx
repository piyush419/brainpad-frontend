import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostNotes = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const [formData, setFormData] = useState({title:"",content:""})

    function handleInput(e){
         const {name, value} = e.target

         setFormData({
            ...formData,
            [name] : value
         })

    }

    async function onSubmitHandle(e){
         e.preventDefault();

         try{
          const token = localStorage.getItem('token')
            const response = await fetch("http://localhost:5000/notes/create", {
                method: 'POST', // Specify HTTP method as POST
                headers: {
                  'Content-Type': 'application/json', 
                  Authorization: `Bearer ${token}`, 
                },
                body: JSON.stringify(formData), // Convert the form data to JSON
              });
              
              const data = await response.json();
              const { message } = data;

              if(response.ok) {
                toast.success(message)
                setFormData({title:"",content:""})
              }

         }catch(e){
            console.log("error posting notes",e)
            toast.error(e)
         }


    }

     useEffect(()=>{
        if(!token) {
           navigate('/?sign-in=true');
        }
     },[])


  return (
    <div className="w-screen mx-auto p-6 bg-white  rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create a Note</h2>
      <form onSubmit={onSubmitHandle} >
        {/* Text Field */}
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>
          <input
            type="text"
            id="text"
            name="title"
            onChange={handleInput}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter some text"
          />
        </div>

        {/* Textarea Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="content"
            onChange={handleInput}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your description"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostNotes