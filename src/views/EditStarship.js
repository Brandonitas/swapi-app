import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import swapi from '../APIs/swapi';
import starship from '../APIs/starship';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


const DarkInputStyle = withStyles({
    root: {
      ".MuiFormControl-root":{
        
      },
      "& label.Mui-focused": {
        color: "red",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "red"
      },
      "& .MuiOutlinedInput-root": {
        marginBottom: "25px",
        width: "397px",
        height: "62px",
        "& fieldset": {
          borderColor: "red"
        },
        "&:hover fieldset": {
          borderColor: "red"
        },
        "&.Mui-focused fieldset": {
          borderColor: "red"
        }
      },
      "& .MuiOutlinedInput-input":{
        color: "white"
      },
      "& .MuiFormLabel-root": {
        color: "white"
       }
    }
  })(TextField);


  const LigthInputStyle = withStyles({
    root: {
      ".MuiFormControl-root":{
        
      },
      "& label.Mui-focused": {
        color: "#BFD4FC",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#565656"
      },
      "& .MuiOutlinedInput-root": {
        marginBottom: "25px",
        width: "397px",
        height: "62px",
        "& fieldset": {
          borderColor: "#BFD4FC"
        },
        "&:hover fieldset": {
          borderColor: "#BFD4FC"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#BFD4FC"
        }
      },
      "& .MuiOutlinedInput-input":{
        color: "#565656"
      },
      "& .MuiFormLabel-root": {
        color: "#565656"
       }
    }
  })(TextField);



const EditStarship = () => {

    const {starshipid} = useParams();
    
    const [starshipData, setStarshipsData] = useState([]);

    const [length, setLength] = useState('');
    const [maxSpeed, setMaxSpeed] = useState('');
    const [cargoCapacity, setCargoCapacity] = useState('');

    const [hasData, setHasData] = useState(false)

    const {darkMode} = useSelector(state => state.style);

    useEffect(() => {

        async function loadStarshipFromBackend(){
            starship.get(`/${starshipid}`).then((res)=>{
                setHasData(true);
                setLength(res.data.starship.length);
                setMaxSpeed(res.data.starship.maxSpeed);
                setCargoCapacity(res.data.starship.cargoCapacity);                
            })
            .catch(e=>{
                console.log(e);
                setHasData(false);
            })
        }

        async function loadData(){
            const res = await swapi.get(`/starships/${starshipid}?format=json`);
            setStarshipsData(res.data);

            if(!hasData){
                setLength(res.data.length);
                setMaxSpeed(res.data.max_atmosphering_speed);
                setCargoCapacity(res.data.cargo_capacity);
            }

        }

        loadStarshipFromBackend();    
        loadData();    
        
    }, [starshipid, hasData])


    const {model, name, manufacturer, cost_in_credits, crew, passengers, consumables, hyperdrive_rating, MGLT, starship_class} = starshipData;


    const handleSaveData = async(e) =>{
        e.preventDefault();

        //If has data put new data, else post new data
        if(hasData){
             starship.put(`/${starshipid}`, {
                idStarship: starshipid,
                length: length,
                maxSpeed:maxSpeed,
                cargoCapacity: cargoCapacity
            })
            .then(res => Swal.fire({
                icon: 'success',
                title: 'Data updated successfully'
              }))
            .catch(e =>{
                Swal.fire({
                    icon: 'error',
                    title: e.msg
                })
            })
        }else{
             starship.post('', {
                idStarship: starshipid,
                length: length,
                maxSpeed:maxSpeed,
                cargoCapacity: cargoCapacity
            })
            .then(res => Swal.fire({
                icon: 'success',
                title: 'Data created successfully'
              }))
            .catch(e =>{
                Swal.fire({
                    icon: 'error',
                    title: e.msg
                })
            })
        }
        
        
    }

    return (
        <div style={{ backgroundColor: darkMode ? "#121212" : "#F3F3F3" }} className="cards-section shadow-xl">
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
                        <div style={{ backgroundColor: darkMode ? "#1C1C1C" : "#F7F7F7" }} className="card-edit p-10">
                            <div className="m-auto text-center">

                                <form onSubmit={handleSaveData}>

                                    {darkMode ? 
                                    
                                    <div>
                                        <DarkInputStyle                                     
                                        label="Length" 
                                        variant="outlined" 
                                        name="length"
                                        value={length}
                                        onChange={e => setLength(e.target.value)}
                                        />  
    
                                        <DarkInputStyle 
                                        label="Max speed" 
                                        variant="outlined" 
                                        name="maxSpeed"
                                        value={maxSpeed}
                                        onChange={e => setMaxSpeed(e.target.value)}
                                        />  
    
                                        <DarkInputStyle 
                                        label="Cargo capacity" 
                                        variant="outlined" 
                                        name="cargoCapacity"
                                        value={cargoCapacity}
                                        onChange={e => setCargoCapacity(e.target.value)}
                                        />    

                                    </div>


                                    :
                                    <div>
                                        <LigthInputStyle                                     
                                        label="Length" 
                                        variant="outlined" 
                                        name="length"
                                        value={length}
                                        onChange={e => setLength(e.target.value)}
                                        />  

                                        <LigthInputStyle 
                                        label="Max speed" 
                                        variant="outlined" 
                                        name="maxSpeed"
                                        value={maxSpeed}
                                        onChange={e => setMaxSpeed(e.target.value)}
                                        />  

                                        <LigthInputStyle 
                                        label="Cargo capacity" 
                                        variant="outlined" 
                                        name="cargoCapacity"
                                        value={cargoCapacity}
                                        onChange={e => setCargoCapacity(e.target.value)}
                                        />    
                                    </div>
                                    }

                                   

                                    <button style={{ backgroundColor: darkMode ? "#3F0000" : "#BFD4FC" }} type="submit" className="btn-submit">
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
