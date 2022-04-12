import React from 'react'
import { Sidebar } from '../Sidebar'

export const AboutApp = () => {
    return (
        <div className='grid grid-cols-6 gap-4'>
            <div>
                <Sidebar />
            </div>
            <div className="col-span-5 p-5">
                <h1 className='font-bold text-xl'>About App</h1>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident dolore ducimus voluptas, praesentium, vero fuga corporis inventore numquam nobis sint minus quia debitis adipisci vitae ex optio asperiores hic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, sapiente. Excepturi libero quidem molestias quos veniam similique illo repudiandae, natus officiis reiciendis fugiat ipsam voluptate perferendis obcaecati, ratione asperiores quod! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam fuga porro similique optio fugit molestias distinctio aperiam hic eos iure, quia enim repudiandae, nam voluptatum animi vel expedita dicta facere?</p>
            </div>
        </div>

    )
}
