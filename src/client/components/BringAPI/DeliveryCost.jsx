import React from 'react';
import axios from "axios";
import {Container, Row, Col, Button, InputGroup} from 'react-bootstrap';

class DeliveryCost extends React.Component {

    state = {
        fromPostalCode: '',
        toPostalCode: '',
        weight: '',
        priceEstimate: '',
        fromPostalCodeError: false,
        toPostalCodeError: false,
        weightError: false,
        invalidInput: false
    };

    // Code of this method from: https://reactjs.org/docs/forms.html (Handling Multiple Form Inputs)
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        if (name !== '') {
            this.setState({
                [name + 'Error']: false
            })
        }
    };

    // Validates title, description and content inputs. Informs the user that input in these fields are required.
    // If all required inputs are validated the state objects gets sent to the API with Axios.
    onFormSubmit = e => {
        e.preventDefault();

        if (this.state.fromPostalCode === '') {
            this.setState({fromPostalCodeError: true})
        }
        if (this.state.toPostalCode === '') {
            this.setState({toPostalCodeError: true})
        }
        if (this.state.weight === '') {
            this.setState({weightError: true})
        } else {
            this.getDeliveryCost()
        }
    };

    getDeliveryCost = async () => {
        this.setState({priceEstimate: ''})
        await axios({
            method: 'GET',
            url: '/shippingguide/v2/products',
            headers: {
                'X-MyBring-API-Uid': 'thomas_bjerke@hotmail.com',
                'X-MyBring-API-Key': 'cd3f3bad-f631-49e0-8fac-46020f8ba18f',
                'X-Bring-Client-URL': 'www.knowitall.io',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
            },
            params: {
                fromcountry: 'NO',
                tocountry: 'NO',
                frompostalcode: this.state.fromPostalCode,
                topostalcode: this.state.toPostalCode,
                weight: this.state.weight,
                product: '3584' // Pakke i postkassen
            }
        }).then(response => {
            const deliveryCostWithVat = response.data.consignments[0].products[0].price.listPrice.priceWithoutAdditionalServices.amountWithVAT
            this.setState({priceEstimate: deliveryCostWithVat});
            // console.log(this.state.priceEstimate)
        }).catch(error => {
            this.setState({invalidInput: true})
        })
    };

    render() {
        return (
            <div>
                <img style={{width: '100px', marginLeft: '41%', marginTop: '10px', marginBottom: '10px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bring_logo.svg/1280px-Bring_logo.svg.png" alt="bring-logo"/>
                <InputGroup className="mb-3" style={{marginLeft: '25%'}}>
                    <div className="field">
                        {this.state.fromPostalCodeError ? (
                            <div>
                                <input className="input"
                                       name="fromPostalCode"
                                       type="text"
                                       placeholder="Fra postnummer"
                                       value={this.state.fromPostalCode}
                                       onChange={this.handleInputChange}
                                       style={{borderColor: 'red'}}/>
                            </div>
                        ) : (
                            <input className="input"
                                   name="fromPostalCode"
                                   type="text"
                                   placeholder="Fra postnummer"
                                   value={this.state.fromPostalCode}
                                   onChange={this.handleInputChange}/>
                        )}
                    </div>
                    <div className="field">
                        {this.state.toPostalCodeError ? (
                            <div>
                                <input className="input"
                                       name="toPostalCode"
                                       type="text"
                                       placeholder="Til postnummer"
                                       value={this.state.toPostalCode}
                                       onChange={this.handleInputChange}
                                       style={{borderColor: 'red'}}/>
                            </div>
                        ) : (
                            <input className="input"
                                   name="toPostalCode"
                                   type="text"
                                   placeholder="Til postnummer"
                                   value={this.state.toPostalCode}
                                   onChange={this.handleInputChange}/>
                        )}
                    </div>
                    <div className="field">
                        {this.state.weightError ? (
                            <div>
                                <input className="input"
                                       name="weight"
                                       type="text"
                                       placeholder="Vekt (gram)"
                                       value={this.state.weight}
                                       onChange={this.handleInputChange}
                                       style={{borderColor: 'red'}}/>
                            </div>
                        ) : (
                            <input className="input"
                                   name="weight"
                                   type="text"
                                   placeholder="Vekt (gram)"
                                   value={this.state.weight}
                                   onChange={this.handleInputChange}/>
                        )}
                    </div>

                </InputGroup>
                <Container style={{marginLeft: '30%', marginRight: '30%'}}>
                    <Row>
                        <Col lg={2}>
                            <Button
                                className="button"
                                type="submit"
                                onClick={this.onFormSubmit}>Submit
                            </Button>
                        </Col>
                        <Col lg={4}>
                            {this.state.priceEstimate? (
                                <h3 style={{color: 'darkgreen'}}>Pris for frakt: {this.state.priceEstimate} kr</h3>
                            ) : (
                                this.state.invalidInput? (
                                    <h3 style={{color: 'red'}}>Ugyldig postnummer eller vekt</h3>
                                ) : (
                                    <div />
                                    )
                                )}

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DeliveryCost
