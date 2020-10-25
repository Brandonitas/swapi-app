import React, { useEffect, useState } from 'react'
import swapi from '../APIs/swapi'
import {useParams} from 'react-router-dom';
import CardStarship from '../components/CardStarship';

const Movie = () => {

    const {movieid} = useParams();

    const [starships, setStarships] = useState([])

    useEffect(() => {
        async function loadData(){
            const res = await swapi.get(`/films/${movieid}?format=json`);
            
            const urlStarships = res.data.starships;
            urlStarships.map(async(url)=>{
                const res = await swapi.get(`${url}?format=json`);
                setStarships(starships => [...starships, res.data]);                
            })

        }

        loadData();        
        
    }, [movieid])

    
    return (
            <div className="cards-section shadow-xl">
                <div className="cards-container">
                    <h2>Select a starship</h2>
                    <div className="grid grid-cols-2 gap-10 mt-10">
                       {starships.map((info)=>{
                           return(
                           <CardStarship info={info}/>
                           )
                       })}  
                        
                    </div>

                </div>
            </div>
    )
}

export default Movie
