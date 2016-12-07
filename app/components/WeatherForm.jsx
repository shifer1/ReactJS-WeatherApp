var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit: function (e) {
		e.preventDefault();
		var location = this.refs.location.value;
		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
  render: function(){
    return (      
      <form onSubmit={this.onFormSubmit} className="form-horizontal" style={{marginTop:30}}>
        <fieldset>
          <legend className="text-center">Form Name</legend>
          <div className="form-group">
            <label className="col-md-4 control-label">Text Input</label>  
            <div className="col-md-4">
              <input type="text" ref="location" placeholder="your city" className="form-control input-md" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Single Button</label>
            <div className="col-md-4">
              <button  className="btn btn-primary">Button</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
});

module.exports = WeatherForm;
