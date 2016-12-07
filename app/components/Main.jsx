var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
      <div>
      	<Nav/>
      	<div className='container' style={{background: '#f0f0f0', border: '1px solid #b0b0b0', minHeight: 550}}>
	        {props.children}
	        </div>
      </div>
    );
};

module.exports = Main;
