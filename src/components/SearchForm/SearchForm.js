import React from 'react';
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
        this.props.submitSearch(this.state.searchText)
        this.clearInputs()
    }

  


    clearInputs = () => {
        this.setState({searchText: ''})
    }

    render = () => {
        return(
            <section className='search-form'>
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