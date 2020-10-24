import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CardMovie = ({info, index}) => {

    useEffect(() => {
        console.log(info);
    }, [info])

    return (
        <Link to={`./movie/${index}`}>
            <div className="card-container-movie p-2">
                <h3>{info.title}</h3>
                <p>{info.director}</p>
                <p>{info.release_date}</p>
            </div>
        </Link>
    )
}

export default CardMovie
