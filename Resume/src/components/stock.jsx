import { BrowserRouter, Routes, Route } from 'react-router'
import React from 'react';
import Item from './components/header.jsx'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Item />} />
          
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
// paste on app.js
// https://uiverse.io/gharsh11032000/tricky-cheetah-78 