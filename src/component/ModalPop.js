import React, { Fragment,useState } from 'react'
import { Container, Card, Row,Button,Modal } from 'react-bootstrap'
export default function ModalPop(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            
            <Fragment>

                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose} animation={false} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


            </Fragment>
        </div>
    )
}
