import React, { useEffect, useState } from 'react'
import swapi from '../APIs/swapi'
import {useParams} from 'react-router-dom';
import CardStarship from '../components/CardStarship';
import { useSelector } from 'react-redux';

const Movie = () => {

    const {movieid} = useParams();

    const [starships, setStarships] = useState([])

    const {darkMode} = useSelector(state => state.style);

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
            <div style={{ backgroundColor: darkMode ? "#121212" : "#F3F3F3" }} className="cards-section shadow-xl">
                <div className="cards-container">
                    <h2>Select a starship</h2>
                    <div className="grid grid-cols-2 gap-10 mt-10">
                       {starships.map((info)=>{
                           return(
                           <CardStarship key={info.url} info={info}/>
                           )
                       })}  
                        
                    </div>

                </div>
            </div>
    )
}

export default Movie
