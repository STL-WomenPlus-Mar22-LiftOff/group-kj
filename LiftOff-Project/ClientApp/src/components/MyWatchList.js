import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
const MyWatchList = () => {
    const [mywatchlist, setItems] = useState([]); //setting it to empty array.
    const dataType = 1;

    useEffect(() => {
        fetch(`mywatchlist/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])
    console.log("here");
    return (
        <main>
            {
                (mywatchlist.length > 0) ? mywatchlist.map((item) =>
                    <div>
                    <Table striped bordered hover>
                    <thead>
                                <tr>
                                    <th width="170">{item.title}</th>
                                    <th width="170">{item.provider}</th>
                        </tr>
                    </thead>
                    
                        </Table> </div>) : <div>Loading...</div>

//                (mywatchlist.length > 0) ? mywatchlist.map((item) => <div> <h3>Title : {item.title}</h3>  
  //                  <h3>Provider :{ item.provider }</h3></div>) : <div>Loading...</div>
            }
        </main>

    )
}

export default MyWatchList;