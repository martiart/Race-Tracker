// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import Components, styles, media
import Navigation from './components/Navigation.js';

import TopicsPage from './pages/TopicsPage.js';
import HomePage from './pages/HomePage.js';
// import LogPage from '/pages/LogPage.js';

import './App.css';
// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

// Define the function that renders the content in Routes, using State.
function App() {
  const [] = useState([])
  return (
    <div className="App">
      <BrowserRouter>

          <header className="App-header">
            <h1>
              <i>
                <img src="./android-chrome-192x192.png" className='App-logo' />
                </i>&nbsp;
              Arturo Martinez</h1>

        
            <p>Web Development Portfolio Website</p>
          </header>

          <Navigation />  
          <nav></nav>

          <main>
            <section className='App-article'>
                <Routes> 

                     <Route path='/' element={<HomePage/>}/>
                     {/* <Route path='/TrackRaces' element={<RacePage/>}/> */}
                     <Route path='/Topics' element={<TopicsPage/>}/>
                     




                </Routes>
              </section>
          </main>

          <footer>
            <p>Copyright statement</p>
            <p>&copy; 2024 Arturo Martinez</p>

          </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;