import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify';
import base_url from "../constants/url";

export default function ConfirmDelete(props) {

    const [loading, setLoading] = useState(false);

    const deleteProduct = async () => {
        setLoading(true);
        await axios.delete(`${base_url}/project/${props.productId}`).then((response) => {
            toast("Deleted successfully");
            setLoading(true);
            window.location.reload();
        });
    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.itemName}</h4>
                <p>
                    Are you sure you want to remove it?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} type="button12">Close</Button>
                <Button onClick={deleteProduct} className="btn btn-danger d-flex align-items-center" type="button12"
                    disabled={loading}
                    >
                    <Spinner animation="border" variant="light" className={"me-2 " + (loading ? "" : "d-none")} />
                    Remove
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
