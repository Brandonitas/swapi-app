import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CardStarship = ({info}) => {

    const [index, setIndex] = useState(null);
    const {darkMode} = useSelector(state => state.style);

    useEffect(() => {
        const i = info.url.substring(31).split('/')[0];
        setIndex(i);
    }, [info.url])

    return (
        <Link to={`/starship/${index}`}>
            <div style={{ backgroundColor: darkMode ? "#272727" : "#DBDBDB" }} className="card-container-starship p-2">
                <h3>{info.name}</h3>
                <p>{info.manufacturer}</p>
                <p>{info.consumables}</p>
            </div>
        </Link>
    )
}

export default CardStarship
