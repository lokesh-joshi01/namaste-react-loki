import React from 'react'
import Contacts from "./Contacts"
import User from './User';

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name : "Dummy",
                location: "default"
            }
        }
    }

    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/lokesh-joshi01");
         const json = await data.json();

         this.setState({
            userInfo: json,
         })

         
         console.log(json);
    }

    render(){
        const{name,location}= this.props;
        return(
            <div className="user-card">
            <h2>Login Id: {this.state.userInfo.login
            }</h2>
            <img src="https://avatars.githubusercontent.com/u/72615725?v=4"></img>
            <h3> Location :{location}</h3>
            <div>
              <Contacts/>
          </div>
          <h4>Done</h4>
          </div>
        );
    } 
}

export default UserClass;