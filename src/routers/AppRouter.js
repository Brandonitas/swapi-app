import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import Header from '../components/Header';
import EditStarship from '../views/EditStarship';
import Home from '../views/Home';
import Movie from '../views/Movie';

const AppRouter = () => {  

    const {darkMode} = useSelector(state => state.style);
    
    return (
        <Router>
            <div className={darkMode ? "darkMode" : "lightMode"}>
                <Header></Header>
                <Switch>
                        <Route 
                            path="/" 
                            exact
                            component={Home}/>
                        <Route  
                            path="/movie/:movieid" 
                            exact 
                            component={Movie}/> 
                        <Route  
                            path="/starship/:starshipid" 
                            exact 
                            component={EditStarship}/>                                                        
                        <Redirect to="/" />
                </Switch> 
            </div>            
        </Router>
    )
}

export default AppRouter
