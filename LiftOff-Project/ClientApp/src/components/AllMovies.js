
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';


const AllMovies = () => {

    const [movielist, setItems] = useState([]); //setting it to empty array.


    useEffect(() => {
        fetch(`values/`) //call the api controller
            .then((results) => {
                return results.json(); //fetch the results in json format
            })
            .then(data => {
                console.log(data);
                setItems(data); //set the userlist array to data
            })
    }, [])



    return (


        <main>
            {

                (movielist.length > 0) ? movielist.map(allmovies =>
                    <div>
                        <Table striped bordered hover>
                            <thead>

                                <tr>
                                    <th width="170">{allmovies.Id}</th>
                                    <th width="170">{allmovies.Title}</th>
                                </tr>
                            </thead>


                        </Table> </div>
                ) : <div>Loading...</div>

            }
        </main>

    )

}


export default AllMovies;