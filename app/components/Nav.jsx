var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to='/' activeClassName='active' activeStyle={{color:'blue'}}>Weather</IndexLink>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li><Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
          </ul>
        </div>
      </nav>
    );
};

module.exports = Nav;
