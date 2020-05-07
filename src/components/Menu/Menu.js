import React from 'react';
import PropTypes from 'prop-types'
import './Menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
        }
    }
    
    filterNewsType = (event) => {
        this.setState({selected: event.target.name})
        this.handleChange(event.target.name)
    }

    handleChange = (name) => {
        this.props.selectNewsType(name)
    }

    styleButton = (newsType) => {
        return this.state.selected === newsType ? 'selected' : 'unselected' 
    }

    // is this cool? originally just had 5 seperate buttons in the render return but this seems cleaner??
    createButton = (name, displayName) => {
        return (<button 
            className={this.styleButton(name)}
            onClick={this.filterNewsType} 
            name={name}>
            {displayName}</button>)
    }

    render() {
        return (
            <nav>
                {this.createButton('local', 'Local News')}
                {this.createButton('technology', 'Technology')}
                {this.createButton('entertainment', 'Entertainment')}
                {this.createButton('science', 'Science')}
                {this.createButton('health', 'Health')}
            </nav>
        )
    }

}

export default Menu;

Menu.propTypes = {
    selectNewsType: PropTypes.func,
}