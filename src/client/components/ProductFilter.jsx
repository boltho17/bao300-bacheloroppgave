import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";
import CollapseList from "./CollapseList";


const ProductFilter = ({products, onFilter}) => {
    // console.log(countries.sort())

    const regions = [];
    const countries = [
        /*
        "Burundi",
        "Etiopia",
        "Kenya",
        "Rwanda",
        "Tanzania",
        "Uganda",
        "Yemen",
        "India",
        "Indonesia",
        "Kina",
        "Papua Ny-Guinea",
        "Vietnam",
        "Brasil",
        "Columbia",
        "Costa Rica",
        "El Salvador",
        "Guatemala",
        "Honduras",
        "Mexico",
        "Nicaragua",
        "Panama",
        "Peru"
         */
    ];
    const roastDegrees = [
        "Light",
        "Light/Medium",
        "Medium",
        "Medium/Strong",
        "Strong",
        "Espresso"
    ];
    const vendors = [''];
    const flavors = [
        /*
        "Sweet & Inviting",
        "Sweet & Smooth",
        "Sweet & Fruity",
        "Sweet & Floral",
        "Balanced & Sweet",
        "Uplifting & Fruity",
        "Comforting & Warming",
        "Spicy & Smokey",
        "Dark & Balanced"
         */
    ];

    // Legger alle registrerte filtere til et array, fjerner duplikater.
    if(products) {
        //  eslint-disable-next-line
        products.map(item => {
            if(!vendors.includes(item.vendor.displayName)) {
                vendors.push(item.vendor.displayName)
            }
            if(!countries.includes(item.country.name)) {
                countries.push(item.country.name)
            }
            if(!regions.includes(item.country.region.name)) {
                regions.push(item.country.region.name)
            }
            if(!flavors.includes(item.category.name)) {
                flavors.push(item.category.name)
            }
        });
    }

    return (
        <div>
            <ListGroup style={{fontSize: '12', cursor: 'pointer'}}>
                <CollapseList onFilter={onFilter} filterName={'Land'} list={countries.sort()}/>
                <CollapseList onFilter={onFilter} filterName={'Region'} list={regions.sort()}/>
                <CollapseList onFilter={onFilter} filterName={'Brennegrad'} list={roastDegrees}/>
                <ListGroup.Item>Bønnetype</ListGroup.Item>
                <ListGroup.Item>Type kaffe</ListGroup.Item>
                <CollapseList onFilter={onFilter} filterName={'Leverandører'} list={vendors}/>
                <CollapseList onFilter={onFilter} filterName={'Smak'} list={flavors.sort()}/>
            </ListGroup>
        </div>
    )
};

export default ProductFilter


