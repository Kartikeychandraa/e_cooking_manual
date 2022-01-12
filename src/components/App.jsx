import React from 'react';
import '../css/App.css';
import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
class App extends React.Component {
  render() {
    return (<div>
    <Header />
    <Cards />
      
     <Footer />
    </div>
    );
  }
}

export default App;