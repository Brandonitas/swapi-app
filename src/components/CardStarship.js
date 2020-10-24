import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CardStarship = ({info}) => {

    const [index, setIndex] = useState(null);

    useEffect(() => {
        const i = info.url.substring(31).split('/')[0];
        setIndex(i);
    }, [info.url])

    console.log("INFOOO",info)

    return (
        <Link to={`/starship/${index}`}>
            <div className="card-container-starship p-2">
                <h3>{info.name}</h3>
                <p>{info.manufacturer}</p>
                <p>{info.consumables}</p>
            </div>
        </Link>
    )
}

export default CardStarship
