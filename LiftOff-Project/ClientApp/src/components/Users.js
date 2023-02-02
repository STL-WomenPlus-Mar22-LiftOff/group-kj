import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

export const Users = () => {

    const [userlist, setItems] = useState([]); //setting it to empty array.

    useEffect(() => {
        fetch(`user/`) //call the api controller
            .then((results) => {
                return results.json(); //fetch the results in json format
            })
            .then(data => {
                //console.log(data);
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

export default Users;