import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    
constructor(){
    super()
    this.state={
        name:'',
        userame:'',
        email:''
    }

    this.captureFriend = this.captureFriend.bind(this);
    this.captureFriendUsername = this.captureFriendUsername.bind(this);
    this.captureFriendEmail = this.captureFriendEmail.bind(this);
    this.onFriendSubmit = this.onFriendSubmit.bind(this)
}

captureFriend(eventObject){
    console.log(eventObject.target.value)
    this.setState({name:eventObject.target.value})
}

captureFriendUsername(eventObject){
    console.log(eventObject.target.value)
    this.setState({userame:eventObject.target.value})
}

captureFriendEmail(eventObject){
    console.log(eventObject.target.value)
    this.setState({email:eventObject.target.value})    
}

onFriendSubmit(eventObject){
    eventObject.preventDefault()
    console.log(this.state)
    axios.post("http://localhost:3000/user", this.state ).then((response)=>{
        console.log("post is successful")

    })

}

    render() { 
        return (  
<div>
    <h1> Home </h1>
    <p> 
    Lorem Ipsum is simply dummy
    text of the printing and 
    typesetting industry. 
    </p>

    <div>
        <h3>Add Friend</h3>
        <form onSubmit={this.onFriendSubmit}>
            Name: <input type="text" value={this.state.name} onChange={this.captureFriend}></input>
            <br></br>
            Userame: <input type="text" value={this.state.userame} onChange={this.captureFriendUsername}></input>
            <br></br>
            Email: <input type="text" value={this.state.email} onChange={this.captureFriendEmail}></input>
            <br></br>
           <button type="submit">Add friend</button>
        </form>
    </div>
</div>

        );
    }
}
 
export default Home;