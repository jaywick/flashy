import React from 'react'
import './styles.css'

export const Card = () => {
    return (
        <div className='card'>
            <div className='question'>
                <h1>What type is an array?</h1>
            </div>
            <div className='answer'>
                <h1>An object.</h1>
                <p>Can be considered a subtype of an object</p>
            </div>
        </div>
    )
}
