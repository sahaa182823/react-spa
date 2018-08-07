import React from 'react'
import axios from 'axios'
import DisplayUser from './DisplayUser'

export default class Friends extends React.Component {
    
    constructor(){
        super()
        this.state = {
            remoteUser:[]
        }
        this.getRemoteUser =this.getRemoteUser.bind(this)
    }



    componentDidMount(){
        console.log("mounted");
        this.getRemoteUser()
    }

    getRemoteUser(){
        axios.get("http://localhost:8888/employee").then(((res) => {
            console.log("axios call was success ")
            console.log(res.data)
            this.setState({remoteUser:res.data});
            console.log(this.state.remoteUser);
        }))

    }


    render() { 


        const alluser = this.state.remoteUser.map((user)=>(
            <DisplayUser
            key={'user-' + user.id }
            myId={user.id}
            myName={user.name}
            myAge= {user.age}
            myDept={user.dept}>
               
            </DisplayUser>
        )) 
        return ( 
            <div>
                <h1> Friends </h1>
                {alluser}

                </div>
         );
    }
}
