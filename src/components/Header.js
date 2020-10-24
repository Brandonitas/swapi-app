import React from 'react'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Header = () => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };


    return (
        <div className="header">
            <div className="flex">
                <img alt="logo" src='/assets/starwars-logo-light.png' className='logo' />
                <div className="m-auto text-center title-container">
                    <h1 className="title-text">SWAPI</h1>
                    <h3 className="title-text -mt-5">By: Brandon Reyes</h3>
                </div>
                              
                
            </div>
            
        </div>
    )
}

export default Header
