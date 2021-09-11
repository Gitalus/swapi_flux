import React from 'react'
import { Link } from 'react-router-dom'

export const CharacterCard = ({
    name,
}) => {
    return (
        <Link to='/' className="link-card">
            <div className='card'>
                <img
                    src={`./assets/imgs/characters/${name}.jpg`}
                    alt={name}
                    className='card-img-top'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                </div>
            </div>

        </Link>
    )
}
