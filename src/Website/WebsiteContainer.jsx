import React from 'react'


import {HashRouter, NavLink , Route} from "react-router-dom"


 
import Home from './Home'
import Friends from './Friends'
import Profile from './Profile'


class Website extends React.Component {
  
    render() { 
        return ( 
            <HashRouter>
            <div >
                <h3>hi!! i am Website and i will be the SPA Container:)</h3>
                <div className="header1">
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/Friends">Friends</NavLink></li>
                    <li><NavLink to="/Profile">Profile</NavLink></li>

                </ul>
                </div>
                <div className="content1">
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/friends" component={Friends}></Route>
                <Route path="/profile" component={Profile}></Route>

                </div>
            </div>

            </HashRouter>
         );
    }
}
 
export default Website;