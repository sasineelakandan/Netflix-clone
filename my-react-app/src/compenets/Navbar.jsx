import React, { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [show,setshow]=useState(false)
    const transmision=()=>{
        if(window.scrollY>100){
            setshow(true)
        }else{
            setshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transmision)

        return ()=>{
            window.removeEventListener('scroll',transmision)
        }
    },[])
    console.log(show)
  return (
    <div className={`Navbar ${show&& 'nav-black'} `} >
      <div className='nav-con' >
      <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="img" />
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar