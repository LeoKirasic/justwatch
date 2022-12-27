import React from 'react';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import DiscoveryPage from './components/discovery/DiscoveryPage';
function App() {
  return (
    <div className='flex flex-col items-center  font-lato'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route
          path='/discover'
          element={<DiscoveryPage></DiscoveryPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
