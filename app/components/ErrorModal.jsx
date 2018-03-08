var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

// A reusable modal dialog component
var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return{
      title: "Error"
    };
  },
  componentDidMount : function(){
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button" data-close="">Okay</button>
        </p>
      </div>
    );
    componentDidMount : function(){
      var {title, message} = this.props;
      var modalMarkup = (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button" data-close="">Okay</button>
            <button className="button" data-close="">Okay</button>
            <button className="button" data-close="">Okay</button>
            <button className="button" data-close="">Okay</button>
          </p>
        </div>
      );
      componentDidMount : function(){
        var {title, message} = this.props;
        var modalMarkup = (
          <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{message}</p>
            <p>
              <button className="button" data-close="">Okay</button>
            </p>
          </div>
        );
    // JQuery
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)). html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  // The render function returns a basic DOM that will be modified,
  // after the component has ben mounted. We need to do this because
  // React doesn't like when thrid-party libs modify a DOM on creation.
  render : function(){
    return(
      <div></div>
    );
  }
});

module.exports = ErrorModal;
