import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CardMovie = ({info, index}) => {

    const {darkMode} = useSelector(state => state.style);

    return (
        <Link to={`/movie/${index}`}>
            <div style={{ backgroundColor: darkMode ? "#272727" : "#DBDBDB" }} className="card-container-movie p-2">
                <h3>{info.title}</h3>
                <p>{info.director}</p>
                <p>{info.release_date}</p>
            </div>
        </Link>
    )
}

export default CardMovie
