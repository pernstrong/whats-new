import React from 'react';
import PropTypes from 'prop-types'
import './SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            searchText: ''
        }
    }

    handleChange = (event) => {
        this.setState({searchText: event.target.value})

    }

    handleClick = () => {
        this.props.submitSearch(this.state.searchText.toLowerCase())
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({searchText: ''})
    }

    render = () => {
        return(
            <section className='search-form'>
                <h1>What's New</h1>
                <input
                    type='text'
                    name='searchText'
                    value={this.state.searchText}
                    onChange={event => this.handleChange(event)} 
                    placeholder='search articles'
                />
                
                <button onClick={this.handleClick}>SEARCH</button>
                <button onClick={this.props.refresh}>CLEAR</button>
            </section>
        )
    }
}

export default SearchForm;

SearchForm.propTypes = {
    submitSearch: PropTypes.func,
    refresh: PropTypes.func
}