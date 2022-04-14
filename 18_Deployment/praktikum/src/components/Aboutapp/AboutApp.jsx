import React from 'react'
import { Sidebar } from '../Sidebar'

export const AboutApp = () => {
  return (
    <div className='grid grid-cols-6 gap-4'>
      <div>
        <Sidebar />
      </div>
      <div className='col-span-5 p-5'>
        <h1 className='font-bold text-xl'>About the App</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis aspernatur eos ipsum architecto labore, alias quia nesciunt obcaecati, accusamus, assumenda nobis deleniti iste id velit officiis suscipit quae! Tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem debitis voluptatibus accusantium. Culpa voluptatum, amet sequi, ipsum cupiditate obcaecati tenetur laudantium recusandae qui ex repellendus sint! Necessitatibus, magnam hic? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, distinctio labore assumenda deleniti similique error quis et minima voluptatibus tenetur provident nam delectus voluptatum, beatae qui alias porro itaque ad!</p>
      </div>
    </div>
  )
}
