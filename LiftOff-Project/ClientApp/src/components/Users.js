
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';


const Users = () => {

    const [userlist, setItems] = useState([]); //setting it to empty array.


    useEffect(() => {
        fetch(`user/`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [])




    return (
        <main>
            {
                (userlist.length > 0) ? userlist.map((items) =>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th width="170">There is some data.</th>
                                </tr>
                            </thead>
                            <Button variant="primary" type="submit">Call API</Button>

                        </Table> </div>) : <div>Loading...</div>

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