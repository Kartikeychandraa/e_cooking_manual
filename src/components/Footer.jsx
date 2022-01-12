import React from 'react';
import '../css/Header.css';
import '../css/Footer.css';
class Footer extends React.Component {
  render() {
    return (<div>
     <div class = 'container'>
   <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
  
  <div class="p-2 bd-highlight">&copy; All rights reserved</div>
  <div class="p-2 bd-highlight"><a href = 'https://github.com/Kartikeychandraa'>Github </a></div>


</footer>
     </div>
    </div>
    );
  }
}

export default Footer;