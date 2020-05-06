import React from 'react';
import PropTypes from 'prop-types'
import './Menu.css'

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

    handleChange = (name) => {
        this.props.selectNewsType(name)
    }

    styleButton = (newsType) => {
        console.log(newsType, this.state.selected)
        return this.state.selected === newsType ? 'selected' : 'unselected' 
    }

    render() {
        return (
            <nav>
                <button 
                className={this.styleButton('local')}
                onClick={event => this.filterNewsType(event) } 
                name='local'>
                Local News</button>

                <button 
                className={this.styleButton('technology')}
                name='technology'
                onClick={event => this.filterNewsType(event)}
                >Technology</button>

                <button 
                className={this.styleButton('entertainment')}
                name='entertainment'
                onClick={event => this.filterNewsType(event)}
                >Entertainment</button>

                <button 
                className={this.styleButton('science')}
                name='science'
                onClick={event => this.filterNewsType(event)}
                >Science</button>

                <button 
                className={this.styleButton('health')}
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

Menu.propTypes = {
    selectNewsType: PropTypes.func,
}