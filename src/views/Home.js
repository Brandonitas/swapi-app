import React, { useEffect, useState } from 'react'
import swapi from '../APIs/swapi'
import CardMovie from '../components/CardMovie'

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function loadData(){
            const res = await swapi.get('/films/?format=json');
            setMovies(res.data.results);
        }

        loadData();
        
    }, [])


    return (
            <div className="cards-section shadow-xl">
                <div className="cards-container">
                    <h2>Select a movie</h2>
                    <div className="grid grid-cols-3 gap-10 mt-10">

                        {movies.map((info, index)=>{
                                return(
                                    <CardMovie key={info.episode_id} info={info} index={index+1}/>
                                )
                        })}
                        
                    </div>

                </div>
            </div>
    )
}

export default Home
