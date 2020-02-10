import React from 'react';
import SearchBar from '../components/SearchBar';
import RecommendedProducts from '../components/RecommendedProducts';
 

class LandingPage extends React.Component {

    render() {
        return ( 
            <div className="App">
                
                <header className="App-header">
                    
                </header>

                <div className="image-container" >
                    <SearchBar />
                </div>
                <RecommendedProducts />
            </div>
        )
    }
}

export default LandingPage
