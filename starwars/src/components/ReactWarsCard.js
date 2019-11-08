import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

const ReactWarsCard = (props) => {
    return (
        <Col xs={{ size: 12 }} sm={{ size: 6 }} md={{ size: 4 }} className="my-3 mx-auto">
            <Card className="shadow">
                <CardBody>
                    <CardTitle>{props.data.name}</CardTitle>
                    <CardSubtitle>Subject is to be considered armed and dangerous!</CardSubtitle>
                    <br />
                    <CardText>Subject is {props.data.skin_color}-skinned and stands at {props.data.height} cm, weighing {props.data.mass} kg. Subject appears {props.data.gender}, with {props.data.hair_color} hair and {props.data.eye_color} eyes.</CardText>
                    <Button href={props.data.url}>See Raw Data</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ReactWarsCard;
