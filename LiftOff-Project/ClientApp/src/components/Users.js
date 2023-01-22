
import React from 'react';


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            UserId : 1
        }
    };
    
    onCreateUser = () => {
        alert('sign up clicked'); //this is working fine.

        let userInfo = {
            Id : this.refs.Id.value,
            UserName : this.refs.firstname.value,
            Password: this.refs.password.value
        };

        console.log(userInfo);

        fetch(`user/`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInfo)
            
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({message : 'User created!'})
            }
        })
      
    }

    render() {
        return (
            <div>
                <p>
                    <label>Id : <input type="text" ref="Id"/></label>
                </p>
                <p>
                    <label>First Name : <input type="text" ref="firstname" /></label>
                </p>
                <p>
                    <label>Last Name : <input type="text" ref="lastname" /></label>
                </p>
                <p>
                    <label>Password : <input type="text" ref="password" /></label>
                </p>
                <p>
                    <label>Confirm Password : <input type="text" ref="confirmpassword" /></label>
                </p>
                <button onClick={this.onCreateUser}>Sign up!</button>
            </div>

            )
    }
}
export default Users;