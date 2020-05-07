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

    render() {
        return (
            <nav>
                <button 
                className={this.styleButton('local')}
                onClick={this.filterNewsType} 
                name='local'>
                Local News</button>

                <button 
                className={this.styleButton('technology')}
                name='technology'
                onClick={this.filterNewsType}
                >Technology</button>

                <button 
                className={this.styleButton('entertainment')}
                name='entertainment'
                onClick={this.filterNewsType}
                >Entertainment</button>

                <button 
                className={this.styleButton('science')}
                name='science'
                onClick={this.filterNewsType}
                >Science</button>

                <button 
                className={this.styleButton('health')}
                name='health'
                onClick={this.filterNewsType}
                >Health</button>

            </nav>
        )
    }

}

export default Menu;

Menu.propTypes = {
    selectNewsType: PropTypes.func,
}