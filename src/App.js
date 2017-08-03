import React, { Component } from 'react';
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';
import MenuList from './components/MenuList';
import LocationList from './components/LocationList';
import SplashImage from './components/SplashImage';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <Navbar />
        </header>
        
        <main>
          <SplashImage />
          <OurStory />
          <MenuList />
          <LocationList />
        </main>

        <footer>
          <section><Contact /></section>
        </footer>
      </div>
    );
  }
}

export default App;
