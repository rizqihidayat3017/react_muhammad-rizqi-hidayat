import React from 'react'

export const TodoCard = ({ Todo }) => {
    return (
        <div style={{
            borderColor: 'black',
            borderWidth: 'thin',
            borderStyle: 'solid',
            borderRadius: '25px',
            margin: '10px',
            width: 'fit-content',
            paddingLeft: '10px',
            paddingRight: '10px'
        }}>
            {
                Todo.completed ? (<p><s>{Todo.title}</s></p>) : (<p>{Todo.title}</p>)
            }
        </div>
    )
}
