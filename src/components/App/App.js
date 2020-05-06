import React, { Component } from 'react';

import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      selected: [...local, ...entertainment, ...health, ...science, ...technology]
    }
  }

  filterNewsType = newsType => {
    this.setState({selected: this.state[newsType]})
  }

  reloadAllArticles = () => {
      this.setState({selected: [...local, ...entertainment, ...health, ...science, ...technology]})
  }

  search = (input) => {
    const matching = this.state.selected.filter(article => article.description.toLowerCase().includes(input) || article.headline.toLowerCase().includes(input))
    this.setState({selected: matching})
  }
 
  render () {
    return (
      <div className="app">
        <SearchForm submitSearch={this.search} refresh={this.reloadAllArticles}/>
        <Menu selectNewsType={this.filterNewsType}/> 
        <NewsContainer selected={this.state.selected} refresh={this.reloadAllArticles}/>
      </div>
    );
  }
}

export default App;