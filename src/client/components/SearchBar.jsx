import React from 'react';

// 1. Mangler mulighet til søk på ord, ikke bare de første bokstavene i et ord. F.eks hvis jeg vil søke på "Amerika" så skal "Sør-Amerika vises.
// 2. Fjerne alt av duplikater fra suggested listen
// 3. Finne ut løsning for hva som skal skje når man trykker på et søkeresultat?

class SearchBar extends React.Component {
    keywords = [''];

    constructor (props) {
        super(props);
        // console.log(props.products.products)

        this.keywords = [
            'Oslo',
            'Lillestrøm',
            'Drammen',
            'Drøbak',
            'Sarpsborg',
            'Sørumsand',
            'Thomas'
        ]

        this.state = {
            products: props.products,
            suggestions: [],
            text: ''
        }

        this.state.products.map(item => {
            if(!this.keywords.includes(item.title)) {
                this.keywords.push(item.title)
            }
            if(!this.keywords.includes(item.vendor.displayName)) {
                this.keywords.push(item.vendor.displayName)
            }
            if(!this.keywords.includes(item.vendor.city)) {
                this.keywords.push(item.vendor.city)
            }
            if(!this.keywords.includes(item.country.name)) {
                this.keywords.push(item.country.name)
            }
            if(!this.keywords.includes(item.country.region.name)) {
                this.keywords.push(item.country.region.name)
            }
        })
        // console.log(this.keywords)
    }   
    
    onTextChanged = (e) => {
        const value = e.target.value
        var suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.keywords.sort().filter(v => regex.test(v))
            this.props.onSearch(value)
            this.props.showResults(true)
        } else this.props.showResults(false)
        this.setState(() => ({suggestions, text: value}))
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }));
        this.props.onSearch(value);
    }

    renderSuggestions() {
        const {suggestions} = this.state
        if (suggestions.length === 0) {
            return null
        } 
        return (
            <ul>
                {suggestions.map((keywords, index) => <li key={index} onClick={() => this.suggestionSelected(keywords)}>{keywords}</li>)}
            </ul>
        )
    }

    render () {
        const {text} = this.state
        return (
            <div className="search-bar">
                <input value={text} onChange={this.onTextChanged} type="text" placeholder='Søk her..' />
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default SearchBar;

