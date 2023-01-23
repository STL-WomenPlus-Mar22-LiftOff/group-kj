//import React, { useState, useEffect, Fragment } from "react";
import React,{useState, useEffect, Fragment} from "react";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Users = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const [editId, setEditId] = useState('')
    const [editUserName, setEditUserName] = useState('')
    const [editEmail, setEditEmail] = useState('')



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
    }, [userData])

    const handleEdit = (id) => {
            //alert(id);
        handleShow();
        
        
    }
    const handleDelete = (id) => {
        
            alert(id);

    }

    const handleUpdate = () => {

    }

    return(
        <Fragment>
            <Container>
                <Row>
                    <Col><input type="number" className="form-control" placeholder="Enter Id" value={id} onChange={(e)=> setId(e.target.value)} /></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter Name" value={userName} onChange={(e) => setUserName(e.target.value)} /></Col>
                    <Col><input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} /></Col>
                </Row>
            </Container>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
            data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index+ 1}</td>
                        <td>{item.id}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td colSpan={2}>
                            <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>

                )
            }) : 'Loading..'

        }
        
      </tbody>
    </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify / Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col><input type="number" className="form-control" placeholder="Enter Id" value={editId} onChange={(e) => setEditId(e.target.value)} /></Col>
                        <Col><input type="text" className="form-control" placeholder="Enter Name" value={editUserName} onChange={(e) => setEditUserName(e.target.value)} /></Col>
                        <Col><input type="text" className="form-control" placeholder="Enter Email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} /></Col>
                        <col>
                            <button className="btn btn-primary">Update</button>
                        </col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
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