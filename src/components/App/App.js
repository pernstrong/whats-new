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
      // localArticles: local,
      // // local, 
      // entertainmentArticles: entertainment, 
      // healthArticles: health, 
      // scienceArticles: science, 
      // technologyArticles: technology,
      selected: [...local, ...entertainment, ...health, ...science, ...technology]

    }
  }

  // how can i write this better...
  filterNewsType = (newsType) => {
    if (newsType === 'local') {
      this.setState({selected: [...local]})
    } else if (newsType === 'entertainment') {
      this.setState({selected: [...entertainment]})
    } else if (newsType === 'health') {
      this.setState({selected: [...health]})
    } else if (newsType === 'science') {
      this.setState({selected: [...science]})
    } else if (newsType === 'tech') {
      this.setState({selected: [...technology]})
    }
  }

  reloadAllArticles = () => {
      this.setState({selected: [...local, ...entertainment, ...health, ...science, ...technology]})
  }


  search = (input) => {
    const matching = this.state.selected.filter(article => article.description.includes(input) || article.headline.includes(input))
    this.setState({selected: matching})
  }
    // build out component for search? Question of whether only to <Whatever /> in returns???? can user anywhere you need a function???


  render () {
    console.log(this.state.selected)
    return (
      <div className="app">
        {/* <section> */}
        <Menu selectNewsType={this.filterNewsType}/> 
        <SearchForm submitSearch={this.search} refresh={this.reloadAllArticles}/>
        <NewsContainer 
          // local={this.state.local} 
          // entertainment={this.state.entertainment} 
          // health={this.state.health} 
          // science={this.state.science} 
          // technology={this.state.technology}
          selected={this.state.selected}
     />
     {/* </section> */}
      </div>
    );
  }
}

export default App;
