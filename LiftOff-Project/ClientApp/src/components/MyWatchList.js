import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
const MyWatchList = () => {
    const [mywatchlist, setItems] = useState([]); //setting it to empty array.
    const UserId = 2;

      useEffect(() => {
          const fetchData = async () => {
              const result = await fetch(`mywatchlist/${UserId}`)
              console.log("here");
              console.log(result);
              const jsonResult = await result.json();
              console.log(jsonResult);
              setItems(jsonResult);
          }

        /*fetch(`mywatchlist/${UserId}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                
                setItems(data);
                console.log(data);
            })*/
          fetchData();
    }, [])

    return (
        <main>
            <h1>{window.username}</h1>
          {
                (mywatchlist.length > 0) ? mywatchlist.map(item =>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th width="170">{item.id}</th>
                                    <th width="170">{item.name}</th>
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