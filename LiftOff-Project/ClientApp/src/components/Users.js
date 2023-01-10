import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
const Users = () => {
    const [name, setName] = useState(''); //setting it to empty array.
    const [location, setlocation] = useState('');

    const dataType = 1;

    return (
        <main>
            {
                
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th width="170"><label> Name : </label><input type="text" name="name"></input></th>
                                <th width="170"><label> location : </label><input type="text" name="location"></input></th>
                                </tr>
                            </thead>

                        </Table> </div>

                //                (mywatchlist.length > 0) ? mywatchlist.map((item) => <div> <h3>Title : {item.title}</h3>  
                //                  <h3>Provider :{ item.provider }</h3></div>) : <div>Loading...</div>
            }
        </main>

    )
}

export default MyWatchList;