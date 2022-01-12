import React from 'react';
import '../css/Header.css';

class App extends React.Component {
  render() {
    return (<div>
     <div class = 'container'>
   
  <div class="d-flex flex-row bd-highlight mb-3 justify-content-center ">
  <div class="p-2 bd-highlight"><button>Home</button></div>
  <div class="p-2 bd-highlight"><input type = 'text'/></div>
  <div class="p-2 bd-highlight"><button>Search</button></div>
  <div class="p-2 bd-highlight"><button>Admin</button></div>
</div>

     </div>
    </div>
    );
  }
}

export default App;