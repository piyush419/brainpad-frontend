import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from "./layout/Applayout"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import PostNotes from "./pages/PostNotes";
import Favourite from "./pages/Favourite";
import UserProfile from "./pages/UserProfile";


const router = createBrowserRouter([
  {
    element : <Applayout/>,
    children :[
      {
        path : "/",
        element : <LandingPage/>
      },
      {
         path :"/home",
         element :<Home/>
      },
      {
        path:"/create",
        element :<PostNotes/>
      },
      {
        path:"/favourites",
        element :<Favourite/>
      },
      {
        path:"/profile",
        element : <UserProfile/>
      }
    ]
  }
])
function App() {
 

  return <div>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router}></RouterProvider>
  </div> 
  
}

export default App
