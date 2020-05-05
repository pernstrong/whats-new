import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // local: local,
      // local, 
      // entertainment: entertainment, 
      // health: health, 
      // science: science, 
      // technology: technology,
      local,
      entertainment,
      health,
      science,
      technology,
      // selected: [...local, ...entertainment, ...health, ...science, ...technology]
      selected: local
    }
  }

  filterNewsType = newsType => {
    this.setState({selected: this.state[newsType]})
  }
  // how can i write this better...
  // filterNewsType = (newsType) => {
  //   if (newsType === 'local') {
  //     this.setState({selected: [...local]})
  //   } else if (newsType === 'entertainment') {
  //     this.setState({selected: [...entertainment]})
  //   } else if (newsType === 'health') {
  //     this.setState({selected: [...health]})
  //   } else if (newsType === 'science') {
  //     this.setState({selected: [...science]})
  //   } else if (newsType === 'tech') {
  //     this.setState({selected: [...technology]})
  //   }
  // }

  reloadAllArticles = () => {
      this.setState({selected: [...local, ...entertainment, ...health, ...science, ...technology]})
  }


  search = (input) => {
    const matching = this.state.selected.filter(article => article.description.toLowerCase().includes(input) || article.headline.toLowerCase().includes(input))
    this.setState({selected: matching})
  }
    // build out component for search? Question of whether only to <Whatever /> in returns???? can use anywhere you need a function???


  render () {
    console.log(this.state.selected)
    return (
      <div className="app">
     

        <SearchForm submitSearch={this.search} refresh={this.reloadAllArticles}/>
        <Menu selectNewsType={this.filterNewsType}/> 
        <NewsContainer selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
