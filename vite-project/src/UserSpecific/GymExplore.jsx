import React from 'react'
import { useParams } from 'react-router-dom'

const GymExplore = () => {
    const { id } = useParams();
    return (
        <>
            <div>GymExplore</div>
            <p>Gym id : {id}</p>
        </>
    )
}

export default GymExplore