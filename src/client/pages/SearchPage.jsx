import React, {useState} from 'react';
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";

const SearchPage = ({products, onSelect}) => {
    const [results, setResults] = useState();
    const [showResults, setShowResults] = useState(false);

    // Søkefunksjon som søker etter et nøkkelord og deretter filtrerer produktene som blir brukt globalt i appen.
    // Hvis produktets tittel, selgernavn, beskrivelse, land eller region inneholder søkeordet så viser produktet.
    const onSearch = term => {
        term = term.toLowerCase();
        setResults(products.filter(product => product.title.toLowerCase().includes(term) || product.vendor.displayName.toLowerCase().includes(term) ||
            product.descriptionLong.toLowerCase().includes(term) ||  product.descriptionShort.toLowerCase().includes(term) || product.country.name.toLowerCase().includes(term) ||
            product.country.region.name.toLowerCase().includes(term)))
        // console.log(results)
    }

    return (
        <div>
            <SearchBar products={products} onSearch={onSearch} showResults={setShowResults}/>
            {(showResults && <SearchResultList results={results} onSelect={onSelect}/>)}
        </div>
    );
};

export default SearchPage;
