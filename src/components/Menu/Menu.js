import React from 'react';
import './Menu.css'

// const Menu = (props) => {
class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
    }
    filterNewsType = (event) => {
        
        this.setState({selected: event.target.name})
        this.handleChange(event.target.name)
    }

    handleChange(name) {
        this.props.selectNewsType(name)

    }

    render() {
        return (
            <nav>
                {/* <h1>What's New</h1> */}

                <button 
                onClick={event => this.filterNewsType(event)} 
                name='local'>
                Local News</button>

                <button 
                name='technology'
                onClick={event => this.filterNewsType(event)}
                >Technology</button>

                <button 
                name='entertainment'
                onClick={event => this.filterNewsType(event)}
                >Entertainment</button>

                <button 
                name='science'
                onClick={event => this.filterNewsType(event)}
                >Science</button>

                <button 
                name='health'
                onClick={event => this.filterNewsType(event)}
                >Health</button>

                {/* <button 
                name='all'
                onClick={event => this.filterNewsType(event)}
                >All News</button> */}

            </nav>
        )
    }
}

export default Menu;