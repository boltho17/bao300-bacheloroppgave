import React, {useState} from 'react';
import {ListGroup} from "react-bootstrap";
import CollapseList from "./CollapseList";


const ProductFilter = ({products, onFilter}) => {
    // console.log(countries.sort())

    const [close, setClose] = useState(false)

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
    const regions = [];
    const roastDegrees = [
        "Light",
        "Light/Medium",
        "Medium",
        "Medium/Strong",
        "Strong",
        "Espresso"
    ];
    const beanTypes = ["Bønnetype 1", "Bønnetype 2", "Bønnetype 3"]
    const coffeeType = ["Type 1", "Type 2", "Type 3"];
    const vendors = [''];
    const flavors = [''
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

    const filters = [
        {
            name: "Land",
            list: countries.sort()
        },
        {
            name: "Region",
            list: regions.sort()
        },
        {
            name: "Brennegrad",
            list: roastDegrees
        },
        {
            name: "Bønnetype",
            list: beanTypes
        },
        {
            name: "Type kaffe",
            list: coffeeType
        },
        {
            name: "Leverandør",
            list: vendors
        },
        {
            name: "Smak",
            list: flavors.sort()
        }]

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
                <ListGroup.Item onClick={() => {setClose(true); onFilter(null)}}>Alle produkter</ListGroup.Item>
                {filters.map((filter, index) => {
                    return <CollapseList close={close} setClose={setClose} onFilter={onFilter} filterName={filter.name} list={filter.list} key={index} />
                })}
            </ListGroup>
        </div>
    )
};

export default ProductFilter


