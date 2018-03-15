var React = require('react');

// IndexLink helps to deal with styles of Links given than it is always active
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

 // Handles the search event from the search bar
  onSearch: function(e){
    e.preventDefault();


    // Obtains the value in the input field of the bar
    var search = this.refs.search.value;
    var encodedSearch = encodeURIComponent(search);

    // Checks it contains something
    if(search.length>0){
      this.refs.search.value ='';
      // Adds parameter to the URI and redirects
      window.location.hash= '#/?location='+encodedSearch;
      window.location.hash= '#/?location='+encodedSearch;
    }
  },
  render: function (){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather Application</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search..." ref="search"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

// <button type="submit" className="button">Get Weather</button>
