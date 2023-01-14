import React from 'react';
import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {LogInForm} from './LogInForm';
import css from './LogInModal.module.css';

export function LogInModal(props) {
    return (
        <Modal show={props.modalOpen} onHide={props.handleModalOpen} centered>

            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <LogInForm />
            </Modal.Body>

            <Modal.Footer className={css.foot}>
                New to NextWatch? <Link to="/create-account" onClick={props.handleModalOpen}>Sign up here!</Link>
            </Modal.Footer>

        </Modal >
    );
}