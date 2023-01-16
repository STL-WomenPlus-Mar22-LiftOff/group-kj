import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

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
                                    <th width="170">There is some data available.</th>
                                    
                                </tr>
                            </thead>
                            <button value="Submit"></button>

                        </Table> </div>) : <div>Loading...</div>

                //                (mywatchlist.length > 0) ? mywatchlist.map((item) => <div> <h3>Title : {item.title}</h3>  
                //                  <h3>Provider :{ item.provider }</h3></div>) : <div>Loading...</div>
            }
        </main>

    )
}

export default Users;