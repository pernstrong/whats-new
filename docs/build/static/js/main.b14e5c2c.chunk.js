(this["webpackJsonpwhats-new"]=this["webpackJsonpwhats-new"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),s=(n(13),n(4)),i=n(1),o=n(5),u=n(3),h=n(2),m=(n(14),n(15),function(e){var t=e.id,n=e.headline,a=e.img,r=e.description,l=e.url;return c.a.createElement("article",{"data-id":t},c.a.createElement("h3",null,n),c.a.createElement("img",{src:a,alt:"news article"}),c.a.createElement("p",null,r),c.a.createElement("a",{href:l},"Link to article"))}),d=function(e){var t=e.selected.map((function(e){return c.a.createElement(m,Object.assign({key:e.headline},e))}));return c.a.createElement("section",{className:"news-container"},t,!e.selected.length&&c.a.createElement("div",null,c.a.createElement("h2",null,"No articles match your search..."),c.a.createElement("button",{onClick:e.refresh},"Back to All Articles")))},f=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).filterNewsType=function(e){a.setState({selected:e.target.name}),a.handleChange(e.target.name)},a.handleChange=function(e){a.props.selectNewsType(e)},a.styleButton=function(e){return a.state.selected===e?"selected":"unselected"},a.createButton=function(e,t){return c.a.createElement("button",{className:a.styleButton(e),onClick:a.filterNewsType,name:e},t)},a.state={selected:""},a}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",null,this.createButton("local","Local News"),this.createButton("technology","Technology"),this.createButton("entertainment","Entertainment"),this.createButton("science","Science"),this.createButton("health","Health"))}}]),n}(c.a.Component)),p=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({searchText:e.target.value})},a.handleClick=function(){a.props.submitSearch(a.state.searchText.toLowerCase()),a.clearInputs()},a.clearInputs=function(){a.setState({searchText:""})},a.render=function(){return c.a.createElement("section",{className:"search-form"},c.a.createElement("h1",null,"What's New"),c.a.createElement("input",{type:"text",name:"searchText",value:a.state.searchText,onChange:a.handleChange,placeholder:"search articles"}),c.a.createElement("button",{onClick:a.handleClick},"SEARCH"),c.a.createElement("button",{onClick:a.props.refresh},"CLEAR"))},a.state={searchText:""},a}return n}(c.a.Component)),E=(n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleApiData=function(t){e.setState({local:t.local,entertainment:t.entertainment,health:t.health,science:t.science,technology:t.technology}),e.setState({selected:[].concat(Object(s.a)(t.local),Object(s.a)(t.entertainment),Object(s.a)(t.health),Object(s.a)(t.science),Object(s.a)(t.technology))})},e.filterNewsType=function(t){e.setState({selected:e.state[t]})},e.reloadAllArticles=function(){window.location.reload()},e.search=function(t){var n=e.state.selected.filter((function(e){return e.description.toLowerCase().includes(t)||e.headline.toLowerCase().includes(t)}));e.setState({selected:n})},e.state={local:[],entertainment:[],health:[],science:[],technology:[],selected:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://whats-new-api.herokuapp.com/api/v1/news").then((function(e){return e.json()})).then((function(t){return e.handleApiData(t)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,{submitSearch:this.search,refresh:this.reloadAllArticles}),c.a.createElement(f,{selectNewsType:this.filterNewsType,propsSelected:this.state.selected}),c.a.createElement(d,{selected:this.state.selected,refresh:this.reloadAllArticles}))}}]),n}(a.Component));l.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b14e5c2c.chunk.js.map