import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import swapi from '../APIs/swapi';
import TextField from '@material-ui/core/TextField';

const EditStarship = () => {

    const {starshipid} = useParams();
    
    const [starshipData, setStarshipsData] = useState([]);

    const [length, setLength] = useState('');
    const [maxSpeed, setMaxSpeed] = useState('');
    const [cargoCapacity, setCargoCapacity] = useState('');

    useEffect(() => {
        async function loadData(){
            const res = await swapi.get(`/starships/${starshipid}?format=json`);
            console.log("DATA DEL STARSHIP", res.data)
            setStarshipsData(res.data);

            //Input data
            setLength(res.data.length);
            setMaxSpeed(res.data.max_atmosphering_speed);
            setCargoCapacity(res.data.cargo_capacity);

        }

        loadData();        
        
    }, [starshipid])


    const {model, name, manufacturer, cost_in_credits, crew, passengers, consumables, hyperdrive_rating, MGLT, starship_class} = starshipData;


    const handleSaveData = (e) =>{
        e.preventDefault();
        
    }

    return (
        <div className="cards-section shadow-xl">
            <div className="cards-container">
                <h2>Edit your starship</h2>
                <div className="grid grid-cols-2 gap-10 mt-10">
                    <div>
                        <h3>Name: {name}</h3>
                        <p>Model: {model}</p>
                        <p>Manufacturer: {manufacturer}</p>
                        <p>Cost: {cost_in_credits}</p>
                        <p>Length: {length}</p>
                        <p>Max speed: {maxSpeed}</p>
                        <p>Crew: {crew}</p>
                        <p>Passengers: {passengers}</p>
                        <p>Cargo capacity: {cargoCapacity}</p>
                        <p>Consumables: {consumables}</p>
                        <p>Hyperdrive rating: {hyperdrive_rating}</p>
                        <p>MGLT: {MGLT}</p>
                        <p>Class: {starship_class}</p>
                    </div>
                    <div>
                        <div className="card-edit p-10">
                            <div className="m-auto text-center">

                                <form onSubmit={handleSaveData}>
       
                                    <TextField 
                                    
                                    className="input-starship" 
                                    label="Length" 
                                    variant="outlined" 
                                    name="length"
                                    value={length}
                                    onChange={e => setLength(e.target.value)}
                                    />  

                                    <TextField 
                                    
                                    className="input-starship" 
                                    label="Max speed" 
                                    variant="outlined" 
                                    name="maxSpeed"
                                    value={maxSpeed}
                                    onChange={e => setMaxSpeed(e.target.value)}
                                    />  

                                    <TextField 
                                    
                                    className="input-starship" 
                                    label="Cargo capacity" 
                                    variant="outlined" 
                                    name="cargoCapacity"
                                    value={cargoCapacity}
                                    onChange={e => setCargoCapacity(e.target.value)}
                                    />    

                                    <button type="submit" className="btn-submit">
                                        Save data
                                    </button>  

                                </form>                                                                                           
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default EditStarship
