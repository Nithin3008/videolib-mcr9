import React from 'react'
import { categories } from '../Data/CategoryData'
import Category from '../../components/Category'
const Home = () => {
    const categoryData=categories
  return (
    <div>
        <h1 className='text-3xl m-2 p-2'>Categories</h1>
        <div className='flex flex-wrap gap-3'>
        {categoryData.map(val=><Category category={val}></Category>)}
        </div>
    </div>
  )
}

export default Home