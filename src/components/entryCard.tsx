import React, {useState} from 'react'
import { Row, Col, Container, Button, Form} from 'react-bootstrap'
import {updateEntry, deleteEntry, createEntry} from 'scripts/scripts'


export const EntryCard = ({id, name, url, description}) => {

    var [formName, setFormName] = useState(name);
    var [formDesc, setFormDesc] = useState(description);
    var [formURL, setFormURL] = useState(url);

    const isEditMode = (localStorage.getItem('edit') == 'true')
    const uid = localStorage.getItem('id')

    console.log(localStorage.getItem('edit'))

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
                    {isEditMode ? (
                        <div>
                            <Form>
                                Title
                                <Form.Control type="text" placeholder={formName} onChange = {(e) => formName = e.target.value}/>
                                URL
                                <Form.Control type="text" placeholder={formURL} onChange = {(e) => formURL = e.target.value}/>
                            </Form>
                        </div>
                    ): (
                        <div>
                            <h2>{name}</h2>
                            <a href={url}>{url}</a>
                        </div>
                    )}
                </Col>
                <Col className="d-flex flex-fill flex-column justify-content-between" sm={6}>
                    {
                        isEditMode ? (
                            <div>
                                Description
                                <Form.Control type="textarea" placeholder={formDesc} onChange = {(e) => formDesc = e.target.value}/>
                            </div>
                        ) : (
                            <div>
                                {description}
                            </div>
                        )
                    }
                    <Form inline className="justify-content-end">
                        {isEditMode ? (
                            <div>
                                <Button type="submit" className="m-1 py-1 px-2" onClick={() => {
                                    localStorage.setItem('edit', 'false')
                                    updateEntry(uid, id, formName, formURL, formDesc)
                                }}>save</Button>
                                <Button type="submit" variant="danger" className="m-1 py-1 px-2" onClick={() => {
                                    localStorage.setItem('edit', 'false')
                                }}>cancel</Button>
                            </div>
                        ) : (
                            <div>
                                <Button type="submit" className="m-1 py-1 px-2" onClick={() => localStorage.setItem('edit', 'true')}>edit</Button>
                                <Button type="submit" variant="danger" className="m-1 py-1 px-2" onClick={() => deleteEntry(uid, id)}>delete</Button>
                            </div>
                        )}
                    </Form>
                </Col>
            </Row>
            <div style={{height: "2em"}}/>
        </Container>
    )
}