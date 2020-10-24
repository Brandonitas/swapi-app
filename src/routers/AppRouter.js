import React from 'react'
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
    return (
        <Router>
            <div>
                <Header></Header>
                <Switch>
                        <Route 
                            path="/movies" 
                            component={Home}/>
                        <Route  
                            path="/movie/:movieid" 
                            exact 
                            component={Movie}/> 
                        <Route  
                            path="/starship/:starshipid" 
                            exact 
                            component={EditStarship}/>                                                        
                        <Redirect to="/movies" />
                </Switch> 
            </div>            
        </Router>
    )
}

export default AppRouter
