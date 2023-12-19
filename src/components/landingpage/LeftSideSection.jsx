import React from 'react'
import { NavLink } from 'react-router-dom'

const LeftSideSection = () => {
  return (
    <section className='h-[91vh] w-[17%] bg-[rgb(48,48,48)]  text-white'>
      <div className='flex flex-col items-center'>
       <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAK2Ud4gQr9pQFT6rc3xbeq74MhZe7bOdvQ&usqp=CAU"}alt="" className='h-[5rem] w-[5rem] rounded-full mt-5'/>
        <p className='mt-3'>Travis Watson</p>
        <p className='mt-1 text-[rgb(112,112,112)]'>Admin</p>
      </div>
     <div className='flex flex-col'>
   
     </div>

    </section>
  )
}

export default LeftSideSection
