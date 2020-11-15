import React, { useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import {EntryCard} from 'components/entryCard'
import {NavBar} from 'components/navBar'
import { useHistory } from "react-router-dom";
import {fetchList} from "scripts/scripts"
import axios from "axios"
import { NewEntryCard } from 'components/newEntryCard';
const url = process.env.REACT_APP_API_ENDPOINT_URL


export const HomePage: React.FC = () => {

    const history = useHistory();
    var [list, setList] = useState([])
    
    useEffect(() => {
        const id = localStorage.getItem('id')

        if (id !== null) {
            fetchList(id, setList)
        } else {
            history.push('/login')
        }
    }, [])

    return (
        <Container fluid className="p-0" style={{backgroundColor: "lightgray", minHeight:"100vh"}}>
            <NavBar/>
            <li style={{listStyleType: "none"}}>
                {list.map((item) => (<EntryCard key={item.id} id={item.id} name={item.title} description={item.description} url={item.url}/>))}
            </li>
            <NewEntryCard/>
        </Container>
    )
}