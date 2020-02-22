import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default class RecommendedProducts extends React.Component {

    render () {

        return (
            <div className="rp-container">
                <h2>Anbefalte Produkter</h2>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='http://tuscanyeasytravel.com/wp-content/uploads/2018/02/Coffee-Italiano-.jpg' />
                <Card.Body>
                <Card.Title>her</Card.Title>
                <Card.Text>
                    Fersk ny kaffe fra de praktiske fjellene i Italia, brakt til
                    deg fra de lokale gjeitene!
            
                </Card.Text>
                <Button variant="primary">Gå til produktet</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
}