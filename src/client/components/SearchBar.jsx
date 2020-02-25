import React from 'react';

export default class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.places = [
            'Oslo',
            'Lillestrøm',
            'Drammen',
            'Sarpsborg',
            'Sørumsand',
            'Thomas'
        ]
        this.state = {
            suggestions: [],
            text: ''
        }
    }   
    
    onTextChanged = (e) => {
        const value = e.target.value
        var suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.places.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({suggestions, text: value}))
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    renderSuggestions() {
        const {suggestions} = this.state
        if (suggestions.length === 0) {
            return null
        } 
        return (
            <ul>
                {suggestions.map((places) => <li onClick={() => this.suggestionSelected(places)}>{places}</li>)}
            </ul>
        )
    }

    render () {
        const {text} = this.state
        return (
            <div className="search-bar">
                <input value={text} onChange={this.onTextChanged} type="text" placeholder='Søk lokale steder her..' />
                {this.renderSuggestions()}
            </div>
        )
    }
}



