//import React, { useState, useEffect, Fragment } from "react";
import React,{useState, useEffect, Fragment} from "react";

import Table from 'react-bootstrap/Table';

const Users = () =>{
    const userData = [
        {
            id : 1,
            userName : 'Happy',
            email : "happy@email.com",

        },
        {
            id : 2,
            userName : 'Priyanka',
            email : "priyanka@email.com",
        }
    ]
    const [data, setData]= useState([]);
    useEffect(()=>{
        setData(userData)
    },[userData])
    return(
        <Fragment>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
            data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item+ 1}</td>
                        <td>{item.id}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                    </tr>

                )
            }) : 'Loading..'

        }
        
      </tbody>
    </Table>

        </Fragment>
    )
}
/*
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

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
*/

export default Users;