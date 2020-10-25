import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import swapi from '../APIs/swapi'
import CardMovie from '../components/CardMovie'

const Home = () => {

    const [movies, setMovies] = useState([])
    const {darkMode} = useSelector(state => state.style);

    useEffect(() => {
        async function loadData(){
            const res = await swapi.get('/films/?format=json');
            setMovies(res.data.results);
        }

        loadData();
        
    }, [])


    return (
            <div style={{ backgroundColor: darkMode ? "#121212" : "#F3F3F3" }} className="cards-section shadow-xl">
                <div className="cards-container">
                    <h2>Select a movie</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

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
