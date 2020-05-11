import React, {useState} from 'react';
import ProductList from "../components/ProductList";

const ShopPage = ({loading, onSelect, data}) => {

    const [products, setProducts] = useState(data)
    const productsList = products;

    // Søkefunksjon som søker etter et nøkkelord og deretter filtrerer produktene som blir brukt globalt i appen.
    // Hvis produktets tittel, selgernavn, beskrivelse, land eller region inneholder søkeordet så viser produktet.
    const onFilter = term => {
        if (term === null) {
            setProducts(data)
        } else {
            term = term.toLowerCase();
            setProducts(data.filter(product => product.vendor.displayName.toLowerCase().includes(term) || product.country.name.toLowerCase().includes(term) ||
                product.country.region.name.toLowerCase().includes(term) || product.roastDegree.toLowerCase() === (term) || product.category.name.toLowerCase().includes(term)))
            // console.log(results)
        }
    }

    if(!products) {
        setTimeout(() => {
            onFilter(null);
        }, 1000);
    }

    return (
        <div>
            <ProductList loading={loading} onSelect={onSelect} data={productsList} filterData={data} onFilter={onFilter}/>
        </div>
    );
}

export default ShopPage
