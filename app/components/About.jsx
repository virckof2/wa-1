var React = require('react');

// Using stateless functional components but now with arrow functions
// -----------------------------------------
var About = (props) =>{
  return(
    <div>
      <h2 className="text-center page-title">About</h2>
      <p>This application was developed by <a href="http://victorguana.blogspot.ca"> Victor Guana</a>.</p>
      <p>The source code of this application is based on the examples provided by
      <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview"> Andrew Mead </a>
       in his <i>"Complete React Web Development Course."</i></p>
    </div>
  );
};

// Classic react component
// -----------------------------------------
// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// Using stateless functional components if you only have a render method
// -----------------------------------------
// var About = function(props){
//   return(
//     <h3>About Component</h3>
//   );
// };

module.exports = About;
