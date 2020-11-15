import React, {useState} from 'react'
import {Card, Container, Row, Col, Form, Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

export const LoginPage: React.FC = () => {
    var [input] = useState("");
    const history = useHistory();

    const url = process.env.REACT_APP_API_ENDPOINT_URL
    console.log(url)

    return (
        <Container style={page}>
            <Card style={card}>
                <Col style={{display: "flex", flexDirection: "column"}}>
                    <h2>Log In</h2>
                    <Form>
                        <Form.Control type="text" placeholder="User Name" onChange = {(e) => input = e.target.value}/>
                    </Form>
                    <div style={{height: ".5em"}}/>
                    <Button variant="primary" size="lg" block onClick = {() => {
                        localStorage.setItem('id', input);
                        history.push("/home");
                    }}>Log In</Button>
                </Col>
            </Card>
        </Container>
    )
}

const page = { 
    backgroundColor: "lightGray",
    minHeight: "100vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
}

const card = {
    backgroundColor: "white",
    padding: "0em 1.5em 2.3em",
    borderRadius:"1.5em",
    display: "flex",
}