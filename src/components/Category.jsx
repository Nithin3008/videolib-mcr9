import React from 'react'
import { useNavigate } from 'react-router'

const Category = ({category}) => {
    const nav=useNavigate()
  return (
    <div onClick={()=>nav(`/VideoPages/${category.category}`)}>
        <img className='rounded' src={category.thumbnail}></img>
        <p className='p-2'>{category.category}</p>
    </div>
  )
}

export default Category