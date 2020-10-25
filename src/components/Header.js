import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { uiSetStyleMode } from '../actions/ui';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
    switchBase: {
      color: red[500],
      
      '&$checked': {
        color: blue[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {
        backgroundColor: grey[500]
    },
  })(Switch);

const Header = () => {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(state => state.style);

    const handleChangeStyle = () =>{
        dispatch(uiSetStyleMode());
    }

    return (
        <div className="header">
            <div className="flex">
                {darkMode ? 
                <Link to='/movies'><img alt="logo" src='/assets/starwars-logo-dark.png' className='logo' /></Link>
                :
                <Link to='/movies'><img alt="logo" src='/assets/starwars-logo-light.png' className='logo' /></Link>
                }
                <div style={{ color: darkMode ? "#FFFFFF" : "#FFFF00" }} className="m-auto text-center title-container">
                    <h1 className="title-text">SWAPI</h1>
                    <h3 className="title-text -mt-5">By: Brandon Reyes</h3>
                </div>
                <FormGroup>
                    <FormControlLabel
                        control={<PurpleSwitch onChange={handleChangeStyle} name="checkedA" />}
                        label={darkMode ? "Change to light side" : "Change to dark side"}
                        labelPlacement="start"
                    />
                </FormGroup>                
                
            </div>
            
        </div>
    )
}

export default Header
