
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';


//class Users extends Component {
//    constructor(props) {
//        super(props)
//        this.state = {
//            users :[]
//        }
//    }
//    componentDidMount() {
//        
//        console.log(this.state.users);
//    }

//    render() {
//        return (
//            <div>
//                <ul>
//                    {this.state.users.map((user) => (
//                        <li key={user.id}>`{user.username}`</li>
//                    ))}
//                </ul>
//                </div>
//        )
//    }
//    }


const Users = () => {

    const [userlist, setItems] = useState([]); //setting it to empty array.


    useEffect(() => {
        fetch(`user/`) //call the api controller
            .then((results) => {
                return results.json(); //fetch the results in json format
            })
            .then(data => {
                console.log(data);
                setItems(data); //set the userlist array to data
            })
            document.body.style.background = "white";
    }, [])


 
    return (


        <main>
            {
                
                (userlist.length > 0) ? userlist.map(users =>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                
                                <tr>
                                    <th width="170">{users.id}</th>
                                    <th width="170">{users.userName}</th>
                                </tr>
                           </thead>
                            

                        </Table> </div>
                ) : <div>Loading...</div>

            }
        </main>

    )

}

//export class Users extends Component {
    
//    constructor(props) {
//        super(props);
//        this.state = { message: '' };
//    };

//    function onCreateUser() {
//        let userInfo = {
//            Id: this.ref.Id.value,
//            UserName: this.ref.UserName.value
//        };

//        fetch(`user/`, {
//            method: 'POST',
//            headers: { 'content-type': 'application/json' },
//            body: JSON.stringify(userInfo)

//        }).then(r => r.json()).then(res => {
//            if (res)
//                this.setState({ message: 'New User is created' })
//        })


//};
//    render() {
//        return (
//            <div>
//                <form>
//                    <div>
//                        <Table striped bordered hover>
//                            <thead>
//                                <tr>
//                                    <input type="text" ref="Id"></input>
//                                    <input type="text" ref="UserName"></input>
//                                </tr>
//                            </thead>
//                            <Button variant="primary" type="submit" onClick={onCreateUser}>Call API</Button>
//                        </Table>
//                    </div>
//                </form>
//            </div>
//        );
//    }
//}
export default Users;