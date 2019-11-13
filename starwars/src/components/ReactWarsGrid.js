import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactWarsCard from "./ReactWarsCard";
import { Container, Row } from 'reactstrap';
import '../App.css';

export default function ReactWarsGrid() {
    const [information, setInformation] = useState([]);
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.}

    useEffect(() => {
        axios
            .get("https://lambda-swapi.herokuapp.com/api/people/")
            .then((response) => {
                //Response.results is an array of objects. Very easy to loop through with .map()
                console.log(response);
                setInformation(response.data.results);
            })
            .catch((error) => {
                console.log(`No data, server responeded with ${error}`);
            });

    }, []);

    //Like so:
    return (
        <Container className="my-5">
            <Row>
                {information.map((element, index) => {
                    //Element is an object, and props are passed as values of an object.
                    //So, the expected way to dig into this data from ReactWarsCard would be props.<key or data>.<whatever>
                    if (element.hair_color === "n/a" | element.hair_color === "none") {
                        element.hair_color = "no";
                    }
                    if (element.gender === "n/a") {
                        element.gender = "genderless";
                    }
                    return (<ReactWarsCard key={index} data={element} />)
                })}
            </Row>
        </Container>
    )
}