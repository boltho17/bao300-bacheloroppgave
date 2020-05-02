import React from 'react';
import {ListGroup} from "react-bootstrap";
import CollapseList from "./CollapseList";


const ProductFilter = (data) => {
    // console.log(countries.sort())

    // Legger alle selgere til et array, fjerner duplikater.
    if(data) {
        //  eslint-disable-next-line
        data.products?.map(item => {
            if(!vendors.includes(item.vendor.displayName)) {
                vendors.push(item.vendor.displayName)
            }
        });
    }

    return (
        <div>
            <ListGroup style={{fontSize: '12', cursor: 'pointer'}}>
                <CollapseList filterName={'Land'} list={countries.sort()}/>
                <CollapseList filterName={'Region'} list={regions}/>
                <CollapseList filterName={'Brennegrad'} list={roastDegrees}/>
                <ListGroup.Item>Bønnetype</ListGroup.Item>
                <ListGroup.Item>Type kaffe</ListGroup.Item>
                <CollapseList filterName={'Leverandører'} list={vendors}/>
                <CollapseList filterName={'Smak'} list={flavors}/>
            </ListGroup>
        </div>
    )
};

export default ProductFilter

const regions = ['Afrika', 'Amerika', 'Asia'];
const countries = [
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
    "Sweet & Inviting",
    "Sweet & Smooth",
    "Sweet & Fruity",
    "Sweet & Floral",
    "Balanced & Sweet",
    "Uplifting & Fruity",
    "Comforting & Warming",
    "Spicy & Smokey",
    "Dark & Balanced"
];
