import React, {useState} from 'react'
import { Row, Col, Container, Button, Form} from 'react-bootstrap'
import {createEntry} from 'scripts/scripts'

export const NewEntryCard = () => {

    var [formName, setFormName] = useState("name");
    var [formDesc, setFormDesc] = useState("description");
    var [formURL, setFormURL] = useState("url");

    const uid = localStorage.getItem('id')

    return (
        <Container fluid style={{
            backgroundColor: "white",
            padding: "1em",
            borderRadius:"0.5em",
            display: "flex",
            width: "40em",
            minHeight: "10em",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            marginTop: "2em"
        }}>
            <Row className="d-flex flex-row flex-fill">
                <Col sm={6}>
                    <Form>
                        Title
                        <Form.Control type="text" placeholder="name" onChange = {(e) => formName = e.target.value}/>
                        URL
                        <Form.Control type="text" placeholder="url" onChange = {(e) => formURL = e.target.value}/>
                    </Form>
                </Col>
                <Col className="d-flex flex-fill flex-column justify-content-between" sm={6}>
                Description
                <Form.Control type="textarea" placeholder="description" onChange = {(e) => formDesc = e.target.value}/>
                    <Form inline className="justify-content-end">
                        <Button type="submit" className="m-1 py-1 px-2" onClick={() => createEntry(uid, formName, formURL, formDesc)}>create</Button>
                    </Form>
                </Col>
            </Row>
            <div style={{height: "2em"}}/>
        </Container>
    )
}