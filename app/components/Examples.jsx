var React = require('react');
var {Link} = require('react-router');

// Calssic react component
// -----------------------------------------
var Examples = React.createClass({
  render: function(){
    return (
      <div>
        <h2 className="text-center page-title">Examples</h2>
        <p>Here are a few locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Edmonton'>Edmonton, AB</Link>
          </li>
          <li>
            <Link to='/?location=Bogota'>Bogota, Colombia</Link>
          </li>ß
        </ol>ß
        {something}
        {something}
        {something}
      </div>
    );
  }
});

// Using stateless functional components with arrow functions
// ----------------------ß-------------------
// var Examples = (props) =>{
//   return(
//     <div>
//       <h3>Examples</h3>
//       <p>Welome to the examples page!</p>
//     </div>
//   );
// };

module.exports=Examples;
