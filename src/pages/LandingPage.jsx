import React, { useEffect, useState } from 'react'
import landingImage from '/Image/notes-taking.jpg'
import { Button } from '@mui/material'
import FormDialog from '../component/Dialog'
import { useSearchParams } from 'react-router-dom'

const LandingPage = () => {
    const [open ,setopen] = useState(false)
    const [text, settext] = useState('')
    const [searchParam , setSearchParam] = useSearchParams();

    function handleOpen(e){
        settext(e.target.innerText)
         setopen(true)
    }

    useEffect(()=>{
          if(searchParam.get("sign-in")) {
             setopen(true)
             settext("LOGIN")
             setSearchParam({})
          }
    },[searchParam])

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: '640px', // Take full viewport height
        backgroundImage: `url(${landingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden', // Prevent overflow and scrollbar
      }}
    >
      <div className='absolute top-48 text-center left-48 text-orange-400 font-bold text-6xl'>
        <span className='pl-9'>"Never lose track of your creativity again,</span><br />
      </div>
      <div className='absolute top-72 text-center left-24 font-bold text-xl pt-3'>
      <div className='text-black ' >"Unlock your creativity and stay organized with our powerful note-taking app. Whether you're jotting down quick ideas, planning your day, or managing important projects, our app is designed to keep your thoughts in sync and at your fingertips. With seamless organization, effortless accessibility, and smart features, you’ll never miss a detail. Elevate your productivity and turn ideas into action—one note at a time!"</div>
      </div>
      {open && <FormDialog open={open} text={text} setopen={setopen} settext={settext}/>}
    </div>
  )
}

export default LandingPage