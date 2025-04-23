import React from 'react'

function ServiceCard({title,desc}) {
  return (
    <div className='bg-blue-300 m-10 p-10 border rounded-lg w-60'>
        <h1 className='text-red-500'>Title:</h1>
        <h2>{title}</h2>
        <h1 className='text-red-500'>Description:</h1>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard;